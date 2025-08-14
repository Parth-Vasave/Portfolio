# Deployment Guide for GitHub Pages

## Prerequisites
- GitHub repository named `portfolio` (or update the base path in `vite.config.js`)
- GitHub Pages enabled in repository settings

## Automatic Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Setup Vite portfolio for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Automatic Deployment:**
   - Every push to `main` branch triggers automatic deployment
   - The workflow builds the project and deploys to `gh-pages` branch
   - Site will be available at: `https://your-username.github.io/portfolio`

## Manual Deployment

If you prefer manual deployment:

```bash
cd frontend
npm run build
npm run deploy
```

## Configuration Files

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow
- **`frontend/vite.config.js`**: Vite configuration with correct base path
- **`frontend/package.json`**: Contains homepage URL and deploy scripts

## Troubleshooting

1. **Images not loading:** Ensure images are in `frontend/public/Images/` directory
2. **404 errors:** Check that the base path in `vite.config.js` matches your repository name
3. **Build fails:** Ensure all dependencies are installed and there are no syntax errors

## Project Structure for GitHub Pages

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── frontend/
│   ├── dist/                   # Build output (auto-generated)
│   ├── public/
│   │   └── Images/            # Static images
│   ├── src/                   # Source code
│   ├── index.html             # Entry point
│   ├── vite.config.js         # Vite configuration
│   └── package.json           # Dependencies and scripts
└── README.md
```

The built files in `frontend/dist/` are automatically deployed to GitHub Pages.