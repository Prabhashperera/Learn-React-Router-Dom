import { BrowserRouter, Route, Routes } from "react-router"
import LayoutPage from "./pages/LayoutPage"
import Home from "./pages/Home"
import AboutUs from "./pages/aboutUs"
import Blog from "./pages/Blog"
// import LayoutPage from "./pages/LayoutPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutUs/>} />
        </Route>
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
