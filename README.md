# FrameCraft

FrameCraft is a premium photography gallery and curated visual archive built with Vite, vanilla JavaScript, and modern CSS. It is designed as an editorial browsing experience for high-quality visual storytelling, combining a polished homepage, responsive gallery layouts, category filtering, favorites, cinema slideshow mode, and a fullscreen lightbox with EXIF-style image details.

**Live Site:** [https://framecraft-image-gallery.vercel.app](https://framecraft-image-gallery.vercel.app)

## Overview

FrameCraft presents photography as a refined digital archive rather than a basic image grid. The homepage uses a purple-to-pink editorial hero, featured collections, archive controls, responsive photography cards, an editorial story section, and a polished call-to-action to create a modern creative portfolio experience.

The project is intentionally lightweight and frontend-only, making it fast to run, easy to deploy, and simple to extend with more image data or future CMS/API integrations.

## Key Features

- Premium editorial homepage design
- Purple-to-pink gradient hero with responsive typography
- Glass-style search bar inside the hero section
- Featured Collections section with large photography cards
- Category filters for All Works, Nature, Travel, Architecture, Portraits, and Favorites
- Search by title, location, photographer, camera, and tags
- Responsive masonry-style gallery layout
- Favorite/save functionality using local storage
- Fullscreen lightbox viewer
- EXIF-style metadata drawer
- Cinema slideshow mode
- Keyboard shortcut helper modal
- Mobile navigation menu
- Responsive layout for desktop, laptop, tablet, and mobile screens

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vite
- Vercel deployment
- Unsplash-powered photography assets

## Project Structure

```text
image-gallery/
|-- index.html
|-- style.css
|-- script.js
|-- package.json
|-- package-lock.json
|-- vite.config.ts
|-- tsconfig.json
|-- metadata.json
`-- dist/
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The development server will start with Vite. By default, this project is configured to use port `3000`; if that port is already in use, Vite may select another available port.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create an optimized production build
npm run preview  # Preview the production build locally
npm run lint     # Run the configured build check
```

## Design Direction

FrameCraft is designed to feel like a premium photography archive, modern creative portfolio, and editorial magazine. The interface focuses on visual hierarchy, clean spacing, large-format imagery, subtle motion, and a professional light color system.

Core design keywords:

- Elegant
- Editorial
- Minimal
- Creative
- Premium
- Photography-focused

## Deployment

The project is deployed on Vercel:

[https://framecraft-image-gallery.vercel.app](https://framecraft-image-gallery.vercel.app)

To deploy your own version, connect the repository to Vercel and use the default Vite build settings.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## Notes

This project does not require a backend. Gallery data, filters, favorites, slideshow behavior, and lightbox interactions are handled directly in the frontend. Favorites are stored in the browser using local storage.

## License

This project is created as a personal portfolio and frontend gallery project.
