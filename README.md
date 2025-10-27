# 🌟 Rajrishi Sharma's Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a dark/light theme toggle and smooth animations.

## 🔗 Live Demo

Visit the live portfolio: [https://rajrishis.github.io](https://rajrishis.github.io)

## ✨ Features

- **Modern Design**: Clean, minimalist interface with professional styling
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Responsive Layout**: Optimized for all screen sizes and devices
- **Interactive Elements**: Hover effects, animations, and smooth scrolling
- **Performance Optimized**: Fast loading with optimized React components
- **SEO Ready**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.18
- **Icons**: Lucide React
- **Build Tool**: Create React App with React Scripts 5.0.1
- **Development**: Hot reload with webpack dev server
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajrishis/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js          # Main portfolio component
│   ├── index.js        # React entry point
│   ├── index.css       # Global styles with Tailwind
│   └── ...
├── package.json
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── README.md
```

## 🎨 Customization

### Personal Information

Update your details in `src/App.js`:

- **Name**: Line 139 - Update the main heading
- **Navigation**: Line 99 - Update the nav logo
- **Contact**: Lines 152-158 - Update social media links
- **Email**: Lines 222, 247 - Update contact email

### Projects

Modify the `projects` array starting at line 24 in `src/App.js`:

```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-url.com",
    color: "bg-blue-500/10 border-blue-500/20"
  },
  // Add more projects...
];
```

### Styling

- **Colors**: Modify Tailwind classes in components
- **Fonts**: Update font families in `src/index.css`
- **Animations**: Adjust transition durations and effects
- **Layout**: Modify spacing and grid layouts

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Other Deployment Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload build folder to S3 bucket

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server on port 3000 |
| `npm test` | Launches test runner |
| `npm run build` | Creates production build |
| `npm run deploy` | Deploys to GitHub Pages |
| `npm run eject` | Ejects from Create React App |

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: < 3 seconds on average connection
- **SEO**: Semantic HTML and meta tags

## 🐛 Known Issues

- ESLint warning for unused `skills` variable (line 75)
- Webpack dev server deprecation warnings (non-breaking)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Rajrishi Sharma**
- Email: [srajrishi3@gmail.com](mailto:srajrishi3@gmail.com)
- GitHub: [@rajrishis](https://github.com/rajrishis)
- LinkedIn: [/in/srajrishi3](https://www.linkedin.com/in/srajrishi3)

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) for the initial setup
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [React](https://reactjs.org/) for the powerful UI library

---

⭐ **Star this repository if you found it helpful!**