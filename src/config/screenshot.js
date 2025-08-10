// Screenshot API Configuration
export const screenshotConfig = {
  // Enable/disable automatic screenshots
  enabled: true,
  
  // Cache duration in milliseconds (24 hours)
  cacheDuration: 24 * 60 * 60 * 1000,
  
  // Screenshot dimensions
  viewport: {
    width: 1200,
    height: 800
  },
  
  // Timeout for each service attempt (in milliseconds)
  serviceTimeout: 20000,
  
  // Quality settings
  quality: 80,
  
  // Service preferences (in order of preference)
  services: {
    microlink: {
      enabled: true,
      priority: 1
    },
    screenshotapi: {
      enabled: true,
      priority: 2
    },
    screenshotlayer: {
      enabled: true,
      priority: 3
    },
    sshot: {
      enabled: true,
      priority: 4
    }
  },
  
  // Development mode - set to false in production
  devMode: import.meta.env.DEV,
  
  // Fallback behavior
  fallbackToOriginal: true,
  
  // Show loading states
  showLoadingStates: true,
  
  // Show error indicators
  showErrorStates: true
};

// Helper function to check if screenshots are enabled
export const isScreenshotEnabled = () => {
  return screenshotConfig.enabled && typeof window !== 'undefined';
};

// Helper function to get cache key
export const getCacheKey = (url) => {
  return `screenshot_${btoa(url)}`;
};

// Helper function to check if cache is valid
export const isCacheValid = (cacheTime) => {
  if (!cacheTime) return false;
  const now = Date.now();
  return (now - parseInt(cacheTime)) < screenshotConfig.cacheDuration;
};
