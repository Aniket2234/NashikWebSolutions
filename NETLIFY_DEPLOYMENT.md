# Netlify Deployment Guide

This guide will help you deploy your Nashik Website Development application to Netlify.

## Prerequisites

- A Netlify account (sign up at https://netlify.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js installed locally for testing

## Files Created for Netlify

The following files have been created to make your application Netlify-ready:

1. **`netlify.toml`** - Netlify configuration file
2. **`netlify/functions/api.ts`** - Serverless function wrapping your Express API
3. **`client/public/_redirects`** - Client-side routing configuration

## Required Package.json Changes

You'll need to update your `package.json` build script manually. Change the build script from:

```json
"build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist"
```

To:

```json
"build": "vite build && esbuild netlify/functions/api.ts --platform=node --packages=external --bundle --format=esm --outdir=netlify/functions"
```

Optionally, keep the original as a separate script for local builds:

```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild netlify/functions/api.ts --platform=node --packages=external --bundle --format=esm --outdir=netlify/functions",
  "build:local": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
}
```

## Deployment Steps

### Option 1: Git-Based Deployment (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider and repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Configure Build Settings (if not auto-detected):**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`

4. **Deploy!**
   - Click "Deploy site"
   - Netlify will build and deploy your site automatically

### Option 2: Netlify CLI Deployment

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize Netlify in your project:**
   ```bash
   netlify init
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Testing Locally with Netlify Dev

Before deploying, you can test the Netlify functions locally:

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Run Netlify Dev:**
   ```bash
   netlify dev
   ```

3. **Access your site:**
   - Open http://localhost:8888
   - API routes will be available at `/api/*`

## Environment Variables

If you need to add environment variables (API keys, database URLs, etc.):

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add your variables (e.g., `DATABASE_URL`, `API_KEY`)

These will be available in your serverless functions via `process.env`.

## Important Notes

### Serverless Function Limitations

- **Execution time:** Maximum 10 seconds for synchronous functions
- **No persistent state:** Each function invocation is independent
- **Cold starts:** Functions may have a slight delay on first execution

### Database Considerations

Since the application currently uses in-memory storage, data will not persist between function invocations on Netlify. For production use, consider:

- **Supabase** (PostgreSQL with real-time features)
- **MongoDB Atlas** (Cloud MongoDB)
- **PlanetScale** (Serverless MySQL)
- **Firebase/Firestore**

### File Uploads

The current setup doesn't include file upload handling. If you need to handle file uploads, consider using:

- Netlify Blob Storage
- Cloudinary
- AWS S3
- Uploadcare

## Troubleshooting

### Build Fails

- Check that all dependencies are in `dependencies` (not `devDependencies`)
- Ensure Node version is compatible (check `.nvmrc` or specify in `netlify.toml`)

### API Routes Not Working

- Verify the `netlify.toml` redirects are correct
- Check that the function builds successfully
- Review function logs in Netlify dashboard

### CORS Errors

If you encounter CORS issues, the serverless function already includes necessary headers. If problems persist, add explicit CORS middleware.

## Post-Deployment

After successful deployment:

1. **Custom Domain:** Configure a custom domain in Netlify settings
2. **HTTPS:** Automatically enabled by Netlify
3. **Continuous Deployment:** Auto-deploys on every git push
4. **Preview Deploys:** Get preview URLs for pull requests

## Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Express on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/express/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)

## Support

For issues specific to this deployment:
- Check the Netlify function logs in your site dashboard
- Review the build logs for any errors
- Test locally with `netlify dev` first

For Netlify-specific issues:
- Visit https://answers.netlify.com/
- Check https://status.netlify.com/

---

**Your application is now ready for Netlify deployment!** 🚀
