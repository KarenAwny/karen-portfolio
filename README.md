# Karen Awny — Junior Flutter Developer Portfolio

A responsive, bilingual (English & Arabic RTL) personal portfolio built with **React.js**, **Vite**, and **CSS3**.

## Tech Stack
- **React.js** (Functional Components & React Hooks: `useState`, `useEffect`)
- **Vite** (Fast build & dev server)
- **CSS3** (Custom properties, responsive Grid/Flexbox, RTL layout support)
- **React Icons** (`react-icons`)

## Project Structure
```text
public/
  images/               # Place your profile photo & project screenshots here
src/
  assets/               # Static assets
  components/
    Navbar.jsx          # Sticky navbar with blur, active section highlight & EN/AR toggle
    Hero.jsx            # Hero section with entrance animations & profile placeholder
    About.jsx           # About Me story & Education / Languages cards
    Skills.jsx          # Categorized skills with honest junior proficiency badges
    Projects.jsx        # Reusable ProjectCard component, screenshot placeholders & preview modal
    Certificates.jsx    # Certificates & Courses showcase
    Contact.jsx         # Mailto button, copy-email button & LinkedIn link
    Footer.jsx          # Quick navigation & copyright
  data/
    portfolioData.js    # Centralized English & Arabic content data
  styles/
    global.css          # Theme variables, typography, reset & utility classes
    components.css      # Component styles, hover animations & responsive breakpoints
  App.jsx               # Main application component (language state & scroll reveal)
  main.jsx              # React DOM entry point
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## How to Add Your Photos Later
1. Copy your profile photo and project screenshots into `public/images/` (e.g., `public/images/profile.jpg`, `public/images/waypoint-1.png`, `public/images/waypoint-2.png`).
2. Open `src/data/portfolioData.js`:
   - Set `personalInfo.profilePhoto = '/images/profile.jpg'`
   - Set `src: '/images/waypoint-1.png'` and `src: '/images/waypoint-2.png'` inside the Waypoint project `screenshots` array.

