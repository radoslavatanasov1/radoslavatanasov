import React, { useState, useEffect } from 'react';
import { sitemapGenerator } from '../../utils/sitemapGenerator';
import { imageDownloader } from '../../utils/imageDownloader';
import { projects } from '../../Data';
import './SEOAdmin.css';

const SEOAdmin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sitemapStats, setSitemapStats] = useState(null);
  const [storageStats, setStorageStats] = useState(null);
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    // Load stats on mount
    loadStats();
    
    // Check for admin access (dev mode or specific key combination)
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  const loadStats = () => {
    // Generate SEO package
    const seoPackage = sitemapGenerator.generateSEOPackage(projects);
    setSeoData(seoPackage);
    setSitemapStats(seoPackage.stats);
    
    // Get storage stats
    setStorageStats(imageDownloader.getStorageStats());
  };

  const downloadSitemap = () => {
    sitemapGenerator.generateSEOPackage(projects);
    sitemapGenerator.downloadSitemap();
    loadStats();
  };

  const downloadRobotsTxt = () => {
    sitemapGenerator.downloadRobotsTxt();
  };

  const cleanupImages = () => {
    imageDownloader.cleanupOldImages();
    loadStats();
    alert('Old images cleaned up successfully!');
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type} copied to clipboard!`);
    });
  };

  if (!isVisible) {
    return (
      <div className="seo-admin-trigger">
        <button 
          onClick={() => setIsVisible(true)}
          className="seo-admin-btn"
          title="Press Ctrl+Shift+S or click to open SEO Admin"
        >
          SEO
        </button>
      </div>
    );
  }

  return (
    <div className="seo-admin-panel">
      <div className="seo-admin-header">
        <h3>🚀 SEO Performance</h3>
        <button onClick={() => setIsVisible(false)} className="close-btn">×</button>
      </div>

      <div className="seo-admin-content">
        
        {/* Sitemap Section */}
        <div className="seo-section">
          <h4>📄 Sitemap Management</h4>
          {sitemapStats && (
            <div className="stats">
              <p><strong>Total Pages:</strong> {sitemapStats.totalPages}</p>
              <p><strong>Base URL:</strong> {sitemapStats.baseUrl}</p>
              <p><strong>Last Generated:</strong> {sitemapStats.lastGenerated ? sitemapStats.lastGenerated.toLocaleString() : 'Never'}</p>
            </div>
          )}
          <div className="actions">
            <button onClick={downloadSitemap} className="action-btn primary">
              📥 Download Sitemap.xml
            </button>
            <button onClick={downloadRobotsTxt} className="action-btn">
              🤖 Download Robots.txt
            </button>
            <button onClick={() => copyToClipboard(seoData?.sitemap, 'Sitemap XML')} className="action-btn">
              📋 Copy Sitemap XML
            </button>
          </div>
        </div>

        {/* Image Storage Section */}
        <div className="seo-section">
          <h4>🖼️ Local Image Storage</h4>
          {storageStats && (
            <div className="stats">
              <p><strong>Cached Screenshots:</strong> {storageStats.count}</p>
              <p><strong>Total Size:</strong> {storageStats.totalSizeMB} MB</p>
              <p><strong>Storage Used:</strong> {((storageStats.totalSize / (5 * 1024 * 1024)) * 100).toFixed(1)}% of 5MB limit</p>
            </div>
          )}
          <div className="actions">
            <button onClick={cleanupImages} className="action-btn warning">
              🧹 Cleanup Old Images
            </button>
            <button onClick={loadStats} className="action-btn">
              🔄 Refresh Stats
            </button>
          </div>
        </div>

        {/* SEO Tips Section */}
        <div className="seo-section">
          <h4>💡 SEO Tips for Client Acquisition</h4>
          <div className="seo-tips">
            <div className="tip">
              <strong>🎯 Target Keywords:</strong>
              <p>"full stack developer hire", "react developer freelance", "nextjs expert", "fintech developer"</p>
            </div>
            <div className="tip">
              <strong>📍 Local SEO:</strong>
              <p>Add location-based keywords: "bulgaria developer", "european developer", "remote developer"</p>
            </div>
            <div className="tip">
              <strong>📱 Social Signals:</strong>
              <p>Share projects on LinkedIn, Dev.to, and GitHub to boost authority</p>
            </div>
            <div className="tip">
              <strong>🔗 Backlinks:</strong>
              <p>Submit to developer directories: AngelList, Upwork, Toptal, Clutch</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="seo-section">
          <h4>⚡ Quick Actions</h4>
          <div className="quick-actions">
            <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="action-btn">
              📊 Google Search Console
            </a>
            <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank" rel="noopener noreferrer" className="action-btn">
              🚀 PageSpeed Insights
            </a>
            <a href="https://www.google.com/webmasters/tools/richsnippets" target="_blank" rel="noopener noreferrer" className="action-btn">
              📋 Rich Snippets Test
            </a>
            <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="action-btn">
              ✅ HTML Validator
            </a>
          </div>
        </div>

      </div>

      <div className="seo-admin-footer">
        <p><small>Press Ctrl+Shift+S to toggle • Generated {new Date().toLocaleTimeString()}</small></p>
      </div>
    </div>
  );
};

export default SEOAdmin;
