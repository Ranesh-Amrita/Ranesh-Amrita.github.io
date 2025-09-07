# Deployment Guide for ranesh.me

## Current Status
✅ GitHub Actions workflow created  
✅ Build configuration updated  
✅ CNAME file configured  
✅ Package.json scripts added  

## Next Steps to Fix Your Site

### 1. Push Changes to GitHub
```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. Save the settings

### 3. Verify Deployment
- The GitHub Actions workflow will automatically run
- Check the "Actions" tab in your repository to see the deployment progress
- Once complete, your site should be live at https://ranesh.me

### 4. Manual Deployment (if needed)
If automatic deployment doesn't work, you can deploy manually:
```bash
npm run deploy
```

## Troubleshooting

### If the site still doesn't work:
1. Check GitHub Actions logs for errors
2. Verify the CNAME file is in the dist folder
3. Ensure your domain DNS is pointing to GitHub Pages
4. Check repository settings for Pages configuration

### Common Issues:
- **404 Error**: Make sure GitHub Pages is enabled and source is set to "GitHub Actions"
- **Domain not working**: Verify DNS settings point to GitHub Pages servers
- **Build fails**: Check for TypeScript/JavaScript errors in the code

## Files Added/Modified:
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `package.json` - Added deployment scripts and gh-pages dependency
- `README.md` - Updated with deployment instructions
- `DEPLOYMENT.md` - This deployment guide
