# Personal Portfolio - React Version

A modern, responsive personal portfolio website built with React and Vite. This is a React refactoring of the original vanilla JavaScript portfolio, making it easier to add animations and use React-specific libraries.

## Features

- **Single Page Application**: Smooth navigation between sections without page reloads
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **React Components**: Modular, reusable component architecture
- **Portfolio Filtering**: Filter projects by category (Web design, Applications, Web development)
- **Testimonials Modal**: Interactive modal for viewing testimonial details
- **Contact Form**: Validated contact form with HTML5 validation
- **Ready for Animations**: Built with React for easy integration with animation libraries

## Project Structure

```
react-portfolio/
├── public/
│   └── assets/          # Images, icons, and static files
├── src/
│   ├── components/      # React components
│   │   ├── Sidebar/
│   │   ├── Navbar/
│   │   ├── About/
│   │   ├── Resume/
│   │   ├── Portfolio/
│   │   ├── Blog/
│   │   └── Contact/
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles
│   ├── index.css       # CSS reset and base styles
│   └── main.jsx        # Application entry point
├── index.html
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Customization

### Updating Content

Content is stored as arrays/objects within each component. To update:

1. **Personal Information**: Edit `Sidebar.jsx`
2. **About Section**: Edit `About.jsx` (services, testimonials, clients)
3. **Resume**: Edit `Resume.jsx` (education, experience, skills)
4. **Portfolio**: Edit `Portfolio.jsx` (projects array)
5. **Blog**: Edit `Blog.jsx` (blog posts array)

### Changing Colors

All colors are defined as CSS custom properties in `src/App.css`. Look for the `:root` section and modify the color variables.

### Adding Animations

This React version is ready for animation libraries. Popular choices:

- **Framer Motion**: `npm install framer-motion`
- **React Spring**: `npm install @react-spring/web`
- **React Transition Group**: `npm install react-transition-group`

See `CLAUDE.md` for implementation examples.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Ionicons** - Icon library
- **Google Fonts** - Poppins font family

## Deployment

After building the project with `npm run build`, deploy the `dist` folder to any static hosting service:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push `dist` folder to `gh-pages` branch
- **Cloudflare Pages**: Connect your repository

## License

MIT License - Copyright (c) 2022 codewithsadee

## Original Version

This is a React port of the original vanilla JavaScript portfolio. The original version can be found in the parent directory.
