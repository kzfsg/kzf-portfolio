# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React and Vite. The site features a single-page application (SPA) design with client-side navigation between different sections (About, Resume, Portfolio, Blog, Contact). This is a React refactoring of the original vanilla JavaScript version.

## Architecture

### React Component Structure
The application follows a component-based architecture:

```
src/
├── App.jsx                 # Main app component with navigation state
├── App.css                 # Global styles (original style.css)
├── index.css               # CSS reset and base styles
├── main.jsx                # React entry point
└── components/
    ├── Sidebar/
    │   ├── Sidebar.jsx     # Sidebar with toggle functionality
    │   └── Sidebar.css
    ├── Navbar/
    │   ├── Navbar.jsx      # Navigation component
    │   └── Navbar.css
    ├── About/
    │   ├── About.jsx       # About page with services, testimonials, clients
    │   └── About.css
    ├── Resume/
    │   ├── Resume.jsx      # Resume page with education, experience, skills
    │   └── Resume.css
    ├── Portfolio/
    │   ├── Portfolio.jsx   # Portfolio with filtering functionality
    │   └── Portfolio.css
    ├── Blog/
    │   ├── Blog.jsx        # Blog posts listing
    │   └── Blog.css
    └── Contact/
        ├── Contact.jsx     # Contact form with validation
        └── Contact.css
```

### State Management
The application uses React's built-in `useState` hook for state management:

1. **Navigation State** (App.jsx):
   - `activeNav`: Tracks which page is currently displayed
   - Passed down to Navbar component as props
   - Navigation switching handled by conditional rendering in App.jsx

2. **Sidebar Toggle** (Sidebar.jsx):
   - `isActive`: Boolean state for mobile sidebar visibility
   - Controls `.active` class on sidebar element

3. **Portfolio Filtering** (Portfolio.jsx):
   - `activeFilter`: Current filter selection ('All', 'Web design', etc.)
   - `isSelectActive`: Controls mobile select dropdown visibility
   - Projects are filtered using JavaScript array filter method

4. **Testimonials Modal** (About.jsx):
   - `selectedTestimonial`: Holds the currently selected testimonial object
   - When null, modal is hidden; when populated, modal displays

5. **Contact Form** (Contact.jsx):
   - `formData`: Object containing form field values
   - `isFormValid`: Boolean for submit button disabled state
   - Uses HTML5 form validation API

### Data Structure
Component data is stored as arrays/objects within each component:

- **Services, Testimonials, Clients** (About.jsx): Defined as arrays of objects
- **Projects** (Portfolio.jsx): Array of objects with title, category, image
- **Education, Experience, Skills** (Resume.jsx): Arrays of objects
- **Blog Posts** (Blog.jsx): Array of blog post objects

This makes it easy to add/remove items by modifying the arrays.

## Development

### Setup and Installation
```bash
cd react-portfolio
npm install
```

### Running the Development Server
```bash
npm run dev
```
This starts the Vite dev server with hot module replacement (HMR).

### Building for Production
```bash
npm run build
```
Creates optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deployment.

## Key Implementation Details

### Adding New Portfolio Items
Add items to the `projects` array in `Portfolio.jsx`:
```javascript
const projects = [
  {
    title: 'Project Name',
    category: 'Web development', // Must match filter options
    image: '/assets/images/project-X.jpg'
  },
  // ... more projects
];
```

Categories must match one of: 'Web design', 'Applications', 'Web development'

### Adding New Navigation Sections
1. Create a new component in `src/components/YourSection/`
2. Import it in `App.jsx`
3. Add the section name to Navbar's `navItems` array
4. Add conditional rendering in App.jsx:
   ```javascript
   {activeNav === 'YourSection' && <YourSection />}
   ```

### Modifying Theme Colors
All colors are defined as CSS custom properties in `App.css`. The variables are prefixed with `--` (e.g., `--orange-yellow-crayola`, `--jet`, `--onyx`).

### Using React Animations
This React version is ready for animation libraries. Popular options:

1. **Framer Motion**: For declarative animations
   ```bash
   npm install framer-motion
   ```
   Add `motion` components and variants to any component.

2. **React Spring**: For physics-based animations
   ```bash
   npm install @react-spring/web
   ```

3. **React Transition Group**: For enter/exit animations
   ```bash
   npm install react-transition-group
   ```

Example: Animating page transitions with Framer Motion:
```javascript
import { motion } from 'framer-motion';

// In App.jsx
{activeNav === 'About' && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <About />
  </motion.div>
)}
```

### Assets Location
All images and static assets are in `public/assets/`. In React, reference them with absolute paths starting with `/`:
```javascript
<img src="/assets/images/my-avatar.png" alt="..." />
```

## Dependencies

### Core Dependencies
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Ionicons 5.5.2**: Icon library (loaded via CDN in index.html)
- **Google Fonts**: Poppins font family (imported in index.css)

### Adding New Dependencies
```bash
npm install package-name
```

## Common Development Tasks

### Adding a New Component
1. Create folder in `src/components/ComponentName/`
2. Create `ComponentName.jsx` and `ComponentName.css`
3. Import and use in parent component

### Updating Content
Content is stored as data arrays within components. Edit the arrays directly in each component file (no separate data files).

### Styling
- Global styles: `App.css` (contains all original CSS)
- Component styles: Individual CSS files (currently placeholders)
- CSS can be split into component files for better organization

## License

MIT License - Copyright (c) 2022 codewithsadee
