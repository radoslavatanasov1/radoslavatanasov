// Utility to download and save screenshots locally
export class ImageDownloader {
  constructor() {
    this.downloadQueue = new Map();
    this.isProcessing = false;
  }

  // Convert image URL to blob and create local object URL
  async downloadAndSaveImage(imageUrl, filename) {
    try {
      console.log(`Downloading screenshot: ${filename}`);
      
      // Check if already downloaded
      const localKey = `local_screenshot_${filename}`;
      const existing = localStorage.getItem(localKey);
      if (existing) {
        return existing;
      }

      // Download the image
      const response = await fetch(imageUrl, {
        mode: 'cors',
        cache: 'force-cache'
      });

      if (!response.ok) {
        throw new Error(`Failed to download image: ${response.status}`);
      }

      const blob = await response.blob();
      
      // Convert to base64 for localStorage (or use IndexedDB for larger files)
      const base64 = await this.blobToBase64(blob);
      
      // Save to localStorage with compression if needed
      const compressedData = this.compressBase64(base64);
      localStorage.setItem(localKey, compressedData);
      localStorage.setItem(`${localKey}_timestamp`, Date.now().toString());
      localStorage.setItem(`${localKey}_size`, blob.size.toString());

      console.log(`Screenshot saved locally: ${filename} (${(blob.size / 1024).toFixed(1)}KB)`);
      return compressedData;

    } catch (error) {
      console.error(`Failed to download image ${filename}:`, error);
      return null;
    }
  }

  // Convert blob to base64
  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // Simple compression for base64 data
  compressBase64(base64Data) {
    // For now, just return as-is. Could implement compression later
    return base64Data;
  }

  // Get locally saved image
  getLocalImage(filename) {
    const localKey = `local_screenshot_${filename}`;
    return localStorage.getItem(localKey);
  }

  // Check if image exists locally
  hasLocalImage(filename) {
    const localKey = `local_screenshot_${filename}`;
    return localStorage.getItem(localKey) !== null;
  }

  // Clean up old local images (older than 30 days)
  cleanupOldImages() {
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('local_screenshot_') && key.endsWith('_timestamp')) {
        const timestamp = parseInt(localStorage.getItem(key));
        if (timestamp < thirtyDaysAgo) {
          const baseKey = key.replace('_timestamp', '');
          localStorage.removeItem(baseKey);
          localStorage.removeItem(key);
          localStorage.removeItem(`${baseKey}_size`);
          console.log(`Cleaned up old screenshot: ${baseKey}`);
        }
      }
    });
  }

  // Get storage usage statistics
  getStorageStats() {
    let totalSize = 0;
    let count = 0;
    
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('local_screenshot_') && !key.includes('_timestamp') && !key.includes('_size')) {
        const sizeKey = `${key}_size`;
        const size = parseInt(localStorage.getItem(sizeKey) || '0');
        totalSize += size;
        count++;
      }
    });

    return {
      count,
      totalSize,
      totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2)
    };
  }
}

// Singleton instance
export const imageDownloader = new ImageDownloader();
