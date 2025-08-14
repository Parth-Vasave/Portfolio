# Parth Vasave - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects, skills, and experience as a Computer Science student specializing in Data Science.

## 🌟 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**: Smooth scrolling navigation and hover effects
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Contact Form**: Integrated contact form using Formspree
- **Skills Display**: Organized technical skills with visual indicators
- **Experience Timeline**: Professional experience and achievements
- **Resume Download**: Direct download link for resume

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL]

## 🛠️ Built With

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Low-level UI primitives
- **Lucide React** - Beautiful & consistent icons
- **React Router** - Client-side routing

### Tools & Services
- **Formspree** - Form handling service
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS post-processor
- **GitHub Actions** - CI/CD for automatic deployment

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   │   ├── Images/           # Project images and assets
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Reusable UI components
│   │   │   └── Portfolio.jsx # Main portfolio component
│   │   ├── data/
│   │   │   └── mock.js      # Portfolio data
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # Optional backend (not used in current deployment)
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Parth-Vasave/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
cd frontend
yarn build
```

This creates a `dist` folder with optimized production files.

### Deploying to GitHub Pages

```bash
cd frontend
yarn deploy
```

Or push to main branch for automatic deployment via GitHub Actions.

## 📝 Customization

### Personal Information
Update your personal details in `frontend/src/data/mock.js`:

```javascript
personalInfo: {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  location: "Your Location",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
}
```

### Projects
Add your projects in the `projects` array:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    tech: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-url.com",
    image: "/images/project-image.png",
    category: "Web Development"
  }
]
```

### Contact Form
The contact form uses Formspree. To set up your own:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form endpoint in `Portfolio.jsx`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of the configuration
});
```

## 🎨 Styling

The project uses Tailwind CSS for styling. Key design elements:

- **Color Scheme**: Emerald and teal gradients with dark theme
- **Typography**: Modern, clean fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first approach with breakpoints

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

In the frontend directory:

- `yarn dev` / `yarn start` - Runs the app in development mode
- `yarn build` - Builds the app for production
- `yarn preview` - Preview the production build locally
- `yarn deploy` - Deploy to GitHub Pages
- `yarn test` - Launches the test runner

## 🚀 Deployment

### GitHub Pages (Automatic)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings (source: GitHub Actions)
3. Every push to main branch automatically deploys the site
4. Site will be available at: `https://yourusername.github.io/portfolio`

### GitHub Pages (Manual)
```bash
cd frontend
yarn deploy
```

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will automatically detect React and configure build settings

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Parth Vasave**
- Email: mailparthvasave@gmail.com
- LinkedIn: [linkedin.com/in/parth-vasave](https://linkedin.com/in/parth-vasave)
- GitHub: [github.com/parth-vasave](https://github.com/parth-vasave)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Radix UI](https://www.radix-ui.com/) - For UI components
- [Lucide](https://lucide.dev/) - For icons
- [Formspree](https://formspree.io/) - For form handling

---

⭐ Star this repository if you found it helpful!
