# Eleventy Excellent - Developer Guide

## Build Commands
- `npm start` - Development mode with live reload
- `npm run build` - Production build with Pagefind search indexing
- `npm run clean` - Remove build artifacts and generated CSS/JS
- `npm run favicons` - Generate favicon assets
- `npm run colors` - Generate color tokens

## Code Style Guidelines
- **JS**: Use ES modules, single quotes, 110 character line limit
- **Formatting**: Prettier with Jinja template support for .njk files
- **CSS**: Follow CUBE CSS methodology (Composition, Utility, Block, Exception)
- **Components**: WebC components or Nunjucks partials in src/_includes
- **Naming**: kebab-case for files, camelCase for JS variables
- **Images**: Use Eleventy-img shortcodes for optimized responsive images

## Project Structure
- `src/_config/` - Eleventy configuration modules
- `src/_data/` - Global data and design tokens
- `src/_includes/` - Templates, components, and partials
- `src/assets/` - CSS, JS, images (follows CUBE CSS pattern)
- `src/pages/` - Main site content
- `src/posts/` - Blog content organized by year

## Design Principles
Follow Andy Bell's buildexcellentwebsit.es principles:
- Progressive enhancement
- Intrinsic design (fluid type/space)
- Accessibility first
- Performance optimization