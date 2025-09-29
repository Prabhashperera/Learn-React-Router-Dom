# React Router Mini Cheat Sheet

This README contains the essential React Router concepts you need to know for building modern React applications with nested routes, dynamic pages, and navigation.

---

## 1️⃣ BrowserRouter

Wrap your whole app **once** in `BrowserRouter`. Only one per app.

```tsx
import { BrowserRouter } from "react-router-dom";
import App from "./App";

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
```

---

## 2️⃣ Routes & Route

Define your route paths and the component to render.

```tsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
```

---

## 3️⃣ path & element

* `path` = URL segment
* `element` = component to render

```tsx
<Route path="blog" element={<Blog />} />
```

---

## 4️⃣ Index Routes (Default Child)

Renders automatically when parent path matches.

```tsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />   // default child
</Route>
```

---

## 5️⃣ Link / NavLink

Navigation **without full reload**.

```tsx
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>
<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
```

---

## 6️⃣ useNavigate()

Programmatic navigation.

```tsx
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return <button onClick={handleLogin}>Login</button>;
}
```

---

## 7️⃣ Nested Routes + Outlet

Parent renders `<Outlet />` for child content.

```tsx
<Route path="projects" element={<Projects />}>
  <Route path="vision" element={<Vision />} />
</Route>
```

Parent component:

```tsx
import { Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Outlet />  {/* nested content renders here */}
    </div>
  );
}
```

---

## 8️⃣ Relative vs Absolute Paths

* Relative → `to="vision"` → nested under parent (`/projects/vision`)
* Absolute → `to="/vision"` → top-level `/vision`

```tsx
<Link to="vision">Vision</Link>   // ✅ nested
<Link to="/vision">Vision</Link>  // ❌ absolute
```

---

## 9️⃣ Dynamic Routes + useParams()

Use params for dynamic content.

```tsx
<Route path="projects/:id" element={<ProjectDetails />} />
```

Inside `ProjectDetails.jsx`:

```tsx
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  return <h2>Project ID: {id}</h2>;
}
```

---

## 🔟 Navigate / Redirects

Redirect users programmatically.

```tsx
import { Navigate } from "react-router-dom";

<Route path="/old" element={<Navigate to="/new" />} />
```

Or in code:

```tsx
const navigate = useNavigate();
navigate("/login");
```

---

## ✅ Tips

* Use **Layouts + Outlet** for shared Navbar/Footer.
* Always use **relative paths** for nested routes.
* Use `index` for default child pages.
* Keep **one BrowserRouter** at the top (usually in main.jsx).

---

Master these 10 topics and you can build almost any React SPA with nested routes, dynamic pages, and programmatic navigation.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
