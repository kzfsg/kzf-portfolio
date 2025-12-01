# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website built with vanilla HTML, CSS, and JavaScript. The site features a single-page application (SPA) design with client-side navigation between different sections (About, Resume, Portfolio, Blog, Contact).

## Architecture

### Single HTML File Structure
- **index.html**: Contains all page content and sections as `<article>` elements with `data-page` attributes
- Sections are toggled via JavaScript class manipulation rather than traditional routing
- All sections exist in the DOM simultaneously; visibility is controlled by the `.active` class

### JavaScript Architecture (assets/js/script.js)
The JavaScript uses vanilla DOM manipulation with the following key patterns:

1. **Navigation System**:
   - Page switching uses `data-nav-link` and `data-page` attributes
   - Navigation buttons set `.active` class on matching article elements
   - Implementation at lines 139-159

2. **Sidebar Toggle**:
   - Mobile-responsive sidebar uses `data-sidebar` and `data-sidebar-btn` attributes
   - Toggle functionality at lines 10-15

3. **Portfolio Filtering**:
   - Project items are filtered by `data-category` attribute
   - Custom select dropdown for mobile and filter buttons for desktop
   - Filtering logic in `filterFunc()` at lines 81-95

4. **Testimonials Modal**:
   - Click handlers populate modal with testimonial data from clicked item
   - Modal and overlay toggle at lines 31-54

5. **Form Validation**:
   - Contact form validation using native HTML5 validation API
   - Submit button is disabled until form.checkValidity() returns true
   - Implementation at lines 118-135

### CSS Architecture (assets/css/style.css)
- Uses CSS custom properties (CSS variables) defined in `:root` for theming
- Color scheme based on gradients and solid colors (dark theme with yellow/orange accents)
- Component-based organization with sections for sidebar, navbar, pages, etc.
- Responsive design using media queries

### Data Attributes Convention
The codebase extensively uses `data-*` attributes for JavaScript element selection:
- `data-sidebar`, `data-sidebar-btn`
- `data-nav-link`, `data-page`
- `data-filter-btn`, `data-filter-item`, `data-category`
- `data-testimonials-item`, `data-modal-container`
- `data-form`, `data-form-input`, `data-form-btn`

When modifying or adding features, maintain this pattern for consistency.

## Development

### Running the Site
Simply open `index.html` in a web browser. No build process or local server is required for basic functionality.

For development with live reload, use any static file server:
```bash
# Python
python -m http.server 8000

# Node.js (if http-server is installed)
npx http-server

# PHP
php -S localhost:8000
```

### File Structure
```
kzf-portfolio/
├── index.html              # Main HTML file with all content
├── assets/
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   └── script.js      # All JavaScript functionality
│   └── images/            # All images and icons
├── website-demo-image/    # Demo screenshots
└── README.md
```

## Key Implementation Details

### Adding New Portfolio Items
Portfolio items in the Portfolio section use this structure:
```html
<li class="project-item active" data-filter-item data-category="category-name">
  <a href="#">
    <figure class="project-img">
      <div class="project-item-icon-box">
        <ion-icon name="eye-outline"></ion-icon>
      </div>
      <img src="./assets/images/project-X.jpg" alt="description" loading="lazy">
    </figure>
    <h3 class="project-title">Project Name</h3>
    <p class="project-category">Category Name</p>
  </a>
</li>
```

Categories must match one of the filter button values (currently: "web design", "applications", "web development").

### Adding New Sections
To add a new section to the navigation:
1. Add a navbar button with `data-nav-link` attribute
2. Create an `<article>` element with corresponding `data-page` attribute value
3. The JavaScript navigation handler (lines 143-158) will automatically handle the switching

### Modifying Theme Colors
All colors are defined as CSS custom properties in `:root` (lines 18-71 of style.css). Modify these variables to change the color scheme globally.

## Dependencies

### External Libraries
- **Ionicons 5.5.2**: Icon library loaded from unpkg CDN
- **Google Fonts**: Poppins font family

Both are loaded via CDN in index.html and require internet connection.

## License

MIT License - Copyright (c) 2022 codewithsadee
