# Facundo Bisio | Senior Frontend Portfolio

> **Engineering-focused portfolio** built with **React**, **Tailwind CSS v4**, and **Framer Motion**.
> Features global state management, performance optimizations (Lazy Loading, Code Splitting), and a scalable folder architecture.

![Portfolio Preview](/public/featured.png) <!-- Update with actual screenshot if available -->

## 🚀 Key Features

### 🏗 Architecture

- **Global State Management**: Powered by a custom `UIContext` (Context API) to manage overlays like Toasts and Lightboxes without prop drilling.
- **Atomic Design Structure**: Organized code into `layout`, `sections`, and reusable `ui` components for scalability.
- **Single Source of Truth**: Project data is consolidated in `src/data/projects.js`, decoupling content from logic.

### ⚡ Performance

- **Code Splitting**: Heavy sections (`Projects`, `Skills`, etc.) are lazy-loaded using `React.lazy` and `Suspense`, improving Initial Load Time.
- **Web Vitals Optimized**: Semantic HTML structure and optimized asset loading.

### 🎨 UX & Animations

- **Micro-Interactions**: Hover effects, scroll-linked reveal animations, and "Spotlight" mouse tracking.
- **Framer Motion Variants**: Reusable animation utilities (`staggerContainer`, `fadeInUp`) for consistent motion design.
- **Optimistic UI**: Instant feedback on interactions (like CV download).

## 🛠️ Stack

- **Core**: React 19, JavaScript (ES6+), Vite 6
- **Styling**: Tailwind CSS v4, CSS Variables
- **Motion**: Framer Motion 12
- **Icons**: Lucide React

## 📂 Project Structure

```bash
src/
├── components/
│   ├── layout/       # Global layout wrappers (Navbar, Footer)
│   ├── sections/     # Page sections (Hero, Projects, Experience)
│   └── ui/           # Reusable atoms (Toast, Lightbox, Badge)
├── context/
│   └── UIContext.jsx # Global UI State
├── data/             # Static content (projects.js)
├── utils/            # Helpers & Animation variants
└── App.jsx           # Entry point with Routing/Providers
```

## 🚦 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/FacundoBisio/facundo-portfolio.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📬 Contact

- **Email**: [facubisio433@gmail.com](mailto:facubisio433@gmail.com)
- **LinkedIn**: [Facundo Bisio Griffa](https://www.linkedin.com/in/facundo-bisio-25a104247/)
- **GitHub**: [@FacundoBisio](https://github.com/FacundoBisio)

---

_Based in Córdoba, Argentina._
