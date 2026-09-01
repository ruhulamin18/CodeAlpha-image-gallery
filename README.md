# FrameCraft

A premium photography gallery and curated visual archive built with Vite, vanilla JavaScript, and modern CSS. The experience is designed to feel editorial and immersive, with a focus on clean navigation, large-format imagery, category filtering, favorites, slideshow mode, and a fullscreen lightbox viewer.

## Overview

FrameCraft is a stylish gallery application for showcasing high-quality photography collections. It offers a refined browsing experience for categories such as nature, travel, architecture, and portraits, while preserving a fast and lightweight frontend architecture.

## Features

- Premium editorial hero section
- Responsive gallery grid layout
- Category-based filtering
- Search by title, location, artist, and tags
- Favorites management
- Fullscreen lightbox viewer with EXIF details
- Slideshow mode
- Keyboard shortcut navigation
- Mobile-friendly responsive interface
- Light mode only visual system

## Tech Stack

- Vite
- Vanilla JavaScript
- HTML5
- CSS3
- Unsplash/Picsum image-driven gallery data

## Project Structure

```bash
image-gallery/
├── index.html
├── style.css
├── script.js
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/
└── dist/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will run in the default Vite development server, typically at:

```bash
http://localhost:3001
```

### Production build

```bash
npm run build
```

## Scripts

```bash
npm run dev     # start local development server
npm run build   # create production build
npm run preview # preview production build locally
```

## Notes

This project is intentionally built as a lightweight front-end gallery without a backend, making it easy to run locally and extend with additional image collections or CMS integrations later.

## License

This project is provided as a front-end demo/gallery project for personal and portfolio use.
