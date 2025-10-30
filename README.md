# Dozee Landing Page

A modern, responsive landing page for Dozee - Transforming Remote Patient Monitoring. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern UI with smooth animations
- 📱 Fully responsive design for all screen sizes
- ⚡ Fast loading with Vite
- 🎯 Component-based architecture
- 📊 JSON-driven content management
- 🌟 Minimal and elegant animations
- 🎭 Titillium Web font family

## Project Structure

```
dozee/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Section.jsx
│   │   │   └── SectionTitle.jsx
│   │   └── sections/
│   │       ├── Header.jsx
│   │       ├── Hero.jsx
│   │       ├── DozeeVS.jsx
│   │       ├── Science.jsx
│   │       ├── EasySetup.jsx
│   │       ├── Features.jsx
│   │       ├── Benefits.jsx
│   │       ├── FAQs.jsx
│   │       ├── Impact.jsx
│   │       ├── DownloadBrochure.jsx
│   │       └── Footer.jsx
│   ├── data/
│   │   └── content.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Updating Content

All content is managed through the `src/data/content.json` file. You can easily update text, links, and other content without modifying the components.

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Animations in `tailwind.config.js`
- Global styles in `src/index.css`

### Container Width

The default container max-width is set to 1600px. You can modify this in `tailwind.config.js`.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Titillium Web** - Google Fonts

## Components

### Common Components
- `Button` - Reusable button with multiple variants
- `Container` - Max-width container wrapper
- `Section` - Section wrapper with consistent spacing
- `SectionTitle` - Styled section titles

### Section Components
- `Header` - Fixed navigation header
- `Hero` - Hero/banner section with background image
- `DozeeVS` - Product showcase section
- `Science` - Science behind the technology
- `EasySetup` - Three-step setup guide
- `Features` - Product features list
- `Benefits` - Benefits grid with CTAs
- `FAQs` - Accordion-style FAQ section
- `Impact` - Statistics and impact metrics
- `DownloadBrochure` - Call-to-action section
- `Footer` - Site footer with links and contact info

## Animations

The page includes several smooth animations:
- Fade in
- Fade in up/down
- Slide in left/right
- Scale in
- Bounce (for scroll indicator)
- Pulse (for background elements)

All animations are CSS-based for optimal performance.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Dozee. All rights reserved.



