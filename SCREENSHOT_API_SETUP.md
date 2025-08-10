# 📸 Automatic Screenshot API Setup

Your portfolio now automatically generates screenshots from your live project URLs! No more manual image updates needed.

## 🚀 How It Works

The portfolio automatically:
1. Takes screenshots of your live websites using the URLs in `src/Data.jsx`
2. Caches screenshots for 24 hours in localStorage for performance
3. Falls back to original images if screenshot services fail
4. Shows loading spinners while generating screenshots

## 🆓 Free Services Used

The system tries multiple free screenshot services in order:

1. **Microlink.io** - Best quality, no API key needed
2. **ScreenshotAPI.net** - Good quality, free tier available
3. **Mini S-Shot** - Russian service, reliable fallback
4. **Google PageSpeed** - Google's screenshot service

## 🔧 Optional API Keys (For Better Performance)

For higher rate limits and better reliability, you can add API keys:

### 1. ScreenshotAPI.net (Recommended)
- Sign up at: https://screenshotapi.net/
- Free tier: 100 screenshots/month
- Paid plans: $9/month for 10,000 screenshots

### 2. Screenshotlayer.com
- Sign up at: https://screenshotlayer.com/
- Free tier: 100 screenshots/month
- Paid plans: $9.99/month for 10,000 screenshots

### 3. Add API Keys to Your Project

Create a `.env` file in your project root:

```env
# Optional API keys for better rate limits
VITE_SCREENSHOT_API_KEY=your_screenshotapi_key_here
VITE_SCREENSHOTLAYER_API_KEY=your_screenshotlayer_key_here
```

## 🔄 How to Update Project Images

Simply update the `link` field in your projects array in `src/Data.jsx`:

```javascript
{
  id: 1,
  img: Project1, // Fallback image
  title: 'My Project',
  link: 'https://myproject.com', // Screenshot will be taken from this URL
  // ... other fields
}
```

The system will automatically:
- Generate a new screenshot from the URL
- Cache it for 24 hours
- Use the fallback image if the URL is unreachable

## 🎨 Customization

You can customize the screenshot behavior in `src/hooks/useScreenshot.js`:

- **Cache duration**: Change the `cacheExpiry` variable (default: 24 hours)
- **Screenshot dimensions**: Modify the viewport width/height parameters
- **Timeout**: Adjust the service timeout (default: 10 seconds)
- **Service order**: Reorder the services array to prioritize different providers

## 🐛 Troubleshooting

**Screenshots not loading?**
- Check browser console for CORS errors
- Ensure your website URLs are publicly accessible
- Some services may be blocked by ad blockers

**Slow loading?**
- Screenshots are cached for 24 hours after first load
- Consider adding API keys for faster, more reliable service

**Quality issues?**
- Microlink.io usually provides the best quality
- You can adjust quality parameters in the service URLs

## 📱 Mobile Optimization

The loading states are fully responsive and will show appropriate spinners and error states on all devices.

## 🔒 Privacy & Security

- Screenshots are cached locally in browser localStorage
- No sensitive data is sent to screenshot services
- All services use HTTPS for secure communication
- Cache is automatically cleaned after 24 hours

---

🎉 **That's it!** Your portfolio now automatically stays up-to-date with fresh screenshots of your live projects!
