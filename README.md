# My Portfolio

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **Component-Based Architecture**: Modular components for easy maintenance
- **Fast Performance**: Optimized with Turbopack for development and production builds
- **Professional Sections**:
  - Hero section with introduction
  - Skills showcase
  - Project portfolio
  - Contact form
  - Professional footer

## Tech Stack

- **Framework**: Next.js 15
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Build Tool**: Turbopack
- **Linting**: ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Header.js     # Navigation header
│   │   ├── HeroSection.js # Hero/intro section
│   │   ├── SkillSection.js # Skills showcase
│   │   ├── ProjectSection.js # Project portfolio
│   │   ├── ContactSection.js # Contact form
│   │   ├── ContactForm.js # Contact form component
│   │   └── Footer.js     # Footer component
│   ├── layout.js         # Root layout
│   └── page.js          # Home page
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
