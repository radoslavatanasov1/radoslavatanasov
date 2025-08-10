import { useState, useEffect } from 'react';
import { screenshotConfig, isScreenshotEnabled, getCacheKey, isCacheValid } from '../config/screenshot';
import { imageDownloader } from '../utils/imageDownloader';

const useScreenshot = (url, fallbackImage) => {
  const [screenshotUrl, setScreenshotUrl] = useState(fallbackImage);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url || !isScreenshotEnabled()) {
      setScreenshotUrl(fallbackImage);
      setIsLoading(false);
      return;
    }

    const generateScreenshot = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Generate filename from URL
        const filename = btoa(url).replace(/[/+=]/g, '').substring(0, 50);
        
        // Check if we have a locally saved image first
        const localImage = imageDownloader.getLocalImage(filename);
        if (localImage) {
          setScreenshotUrl(localImage);
          setIsLoading(false);
          return;
        }

        // Check if we have a cached screenshot URL in localStorage
        const cacheKey = getCacheKey(url);
        const cached = localStorage.getItem(cacheKey);
        const cacheTime = localStorage.getItem(`${cacheKey}_time`);
        
        if (cached && cacheTime && isCacheValid(cacheTime)) {
          // Try to download and save the cached URL locally
          imageDownloader.downloadAndSaveImage(cached, filename).then(localUrl => {
            if (localUrl) {
              setScreenshotUrl(localUrl);
            } else {
              setScreenshotUrl(cached);
            }
          }).catch(() => {
            setScreenshotUrl(cached);
          });
          setIsLoading(false);
          return;
        }

        const encodedUrl = encodeURIComponent(url);
        
        // Get API keys from environment variables (if available)
        const screenshotApiKey = import.meta.env.VITE_SCREENSHOT_API_KEY;
        const screenshotLayerKey = import.meta.env.VITE_SCREENSHOTLAYER_API_KEY;

        const { viewport, quality } = screenshotConfig;
        
        // Try multiple screenshot services in order of preference
        const services = [
          // Microlink.io - Free, no API key needed, best quality
          screenshotConfig.services.microlink.enabled && 
          `https://api.microlink.io/screenshot?url=${encodedUrl}&viewport.width=${viewport.width}&viewport.height=${viewport.height}&type=png&quality=${quality}&fullPage=false`,
          
          // ScreenshotAPI.net - Free tier with optional API key
          screenshotConfig.services.screenshotapi.enabled && (
            screenshotApiKey 
              ? `https://shot.screenshotapi.net/screenshot?token=${screenshotApiKey}&url=${encodedUrl}&width=${viewport.width}&height=${viewport.height}&output=image&file_type=png&block_ads=true&no_cookie_banners=true`
              : `https://shot.screenshotapi.net/screenshot?token=demo&url=${encodedUrl}&width=${viewport.width}&height=${viewport.height}&output=image&file_type=png`
          ),
          
          // Screenshotlayer.com - Free tier with API key
          screenshotConfig.services.screenshotlayer.enabled && screenshotLayerKey && 
          `https://api.screenshotlayer.com/api/capture?access_key=${screenshotLayerKey}&url=${encodedUrl}&viewport=${viewport.width}x${viewport.height}&format=PNG&fullpage=0`,
          
          // Alternative free services
          screenshotConfig.services.sshot.enabled && 
          `https://mini.s-shot.ru/${viewport.width}x${viewport.height}/PNG/${viewport.width}/Z100/?${encodedUrl}`,
        ].filter(Boolean); // Remove null/false entries

        let successfulUrl = null;

        for (const serviceUrl of services) {
          try {
            // Test if the image loads successfully
            const testImg = new Image();
            testImg.crossOrigin = 'anonymous';
            
            const imageLoaded = await new Promise((resolve) => {
              testImg.onload = () => resolve(true);
              testImg.onerror = () => resolve(false);
              testImg.src = serviceUrl;
              
              // Timeout based on config
              setTimeout(() => resolve(false), screenshotConfig.serviceTimeout);
            });

            if (imageLoaded) {
              successfulUrl = serviceUrl;
              break;
            }
          } catch (err) {
            console.log(`Screenshot service failed: ${serviceUrl}`, err);
            continue;
          }
        }

        if (successfulUrl) {
          // Cache the successful URL
          const now = Date.now();
          localStorage.setItem(cacheKey, successfulUrl);
          localStorage.setItem(`${cacheKey}_time`, now.toString());
          
          // Download and save locally in the background
          imageDownloader.downloadAndSaveImage(successfulUrl, filename).then(localUrl => {
            if (localUrl) {
              setScreenshotUrl(localUrl);
              console.log(`Screenshot saved locally for: ${url}`);
            }
          }).catch(err => {
            console.warn(`Failed to save screenshot locally: ${err.message}`);
          });
          
          // Show the remote URL immediately
          setScreenshotUrl(successfulUrl);
        } else {
          throw new Error('All screenshot services failed');
        }

      } catch (err) {
        console.error('Screenshot generation failed:', err);
        setError(err);
        setScreenshotUrl(fallbackImage);
      } finally {
        setIsLoading(false);
      }
    };

    generateScreenshot();
  }, [url, fallbackImage]);

  return { screenshotUrl, isLoading, error };
};

export default useScreenshot;
