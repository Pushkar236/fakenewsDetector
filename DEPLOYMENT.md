# Deployment Guide

This guide covers different deployment options for the NewsCheck Fake News Detector.

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel provides seamless deployment for React applications.

#### Steps:

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel
   ```

4. **Set Environment Variables**:
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add `VITE_GEMINI_API_KEY` in the Environment Variables section

#### Production URL:

Your app will be available at `https://your-app-name.vercel.app`

### 2. Netlify

#### Steps:

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Install Netlify CLI**:

   ```bash
   npm install -g netlify-cli
   ```

3. **Login and deploy**:

   ```bash
   netlify login
   netlify deploy --prod --dir=dist
   ```

4. **Set Environment Variables**:
   - Go to your Netlify dashboard
   - Navigate to Site settings > Environment variables
   - Add `VITE_GEMINI_API_KEY`

### 3. GitHub Pages

#### Steps:

1. **Install gh-pages**:

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment scripts to package.json**:

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts** for GitHub Pages:

   ```typescript
   export default defineConfig({
     base: "/newscheck-detector-0.0.1/",
     // ... other config
   });
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

#### Steps:

1. **Install Firebase CLI**:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login and initialize**:

   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

## 🔐 Environment Variables

Ensure these environment variables are set in your deployment platform:

| Variable              | Value               | Description              |
| --------------------- | ------------------- | ------------------------ |
| `VITE_GEMINI_API_KEY` | Your Gemini API key | Required for AI analysis |

## 📱 Production Optimizations

### 1. Build Optimizations

The production build includes:

- Code splitting
- Tree shaking
- Minification
- Compression

### 2. Performance Tips

- Enable gzip compression on your hosting platform
- Use a CDN for static assets
- Monitor Core Web Vitals
- Implement proper caching headers

### 3. Security Considerations

- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Implement rate limiting for API calls
- Monitor API usage and costs

## 🚀 Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_GEMINI_API_KEY: ${{ secrets.VITE_GEMINI_API_KEY }}

      - name: Deploy to Vercel
        uses: vercel/action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📊 Monitoring

### 1. Performance Monitoring

Consider integrating:

- Google Analytics
- Vercel Analytics
- Sentry for error tracking

### 2. API Usage Monitoring

- Monitor Gemini API usage
- Set up billing alerts
- Implement rate limiting

## 🔧 Troubleshooting

### Common Issues:

1. **Build Errors**:

   - Check Node.js version (18+)
   - Clear node_modules and reinstall
   - Verify environment variables

2. **API Issues**:

   - Verify Gemini API key is correct
   - Check API quotas and limits
   - Ensure API is enabled in Google Cloud

3. **Deployment Failures**:
   - Check build logs
   - Verify environment variables are set
   - Test locally first

### Support Resources:

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Google Gemini API Documentation](https://ai.google.dev/docs)

---

For additional support, please open an issue on the GitHub repository.
