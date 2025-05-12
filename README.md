# Countries API React App

A modern, responsive web application built with React, TypeScript, Redux Toolkit, Vite, and Tailwind CSS. This project displays country data, allows searching and filtering, and supports light/dark mode theming.

## Features

- Browse a list of countries with details such as population, region, capital, and more
- Search for countries by name
- Filter countries by region
- View detailed information for each country, including bordering countries
- Responsive design for desktop and mobile
- Light and dark mode support

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/) (for accessible dropdowns)

## Project Structure

```
src/
  main.tsx                # App entry point
  app/
    index.css             # Global styles (Tailwind + custom CSS variables)
    layout/               # App layout and header
    pages/                # Home and detail pages
    api/                  # Axios instance for API calls
    hooks/                # Custom hooks
    store.ts              # Redux store setup
    routes.tsx            # App routes
  features/
    countries/            # Country feature (slice, components, models)
  shared/
    utils/                # Shared utility functions
public/
  data.json               # Local country data (fallback)
```

## Getting Started

1. **Install dependencies:**
   ```zsh
   npm install
   ```
2. **Start the development server:**
   ```zsh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Customization

- **Dark Mode:** Toggle dark mode using the button in the header. The app uses CSS variables and Tailwind's arbitrary value utilities for theming.
- **API Data:** By default, the app uses a local `data.json` file in the `public/` folder. You can replace this with your own data or connect to an external API.

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
