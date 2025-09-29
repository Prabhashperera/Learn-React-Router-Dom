import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutPage from "./pages/LayoutPage"
import Home from "./pages/Home"
import AboutUs from "./pages/aboutUs"
import Blog from "./pages/Blog"
import Projects from "./pages/Projects"
import Vision from "./pages/Vision"
// import LayoutPage from "./pages/LayoutPage"

function App() {
  return (
    // This is only can have only one for a app
    <BrowserRouter> 
      <Routes>
        {/* //Nested Layout Routing */}
        <Route path="/" element={<LayoutPage/>}>
        {/* // Child Routings x2 */}
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutUs/>} />
        </Route>
        {/* //Parent Route */}
        <Route path="/blog" element={<Blog/>} />
        {/* Nested Routing */}
        <Route path="projects" element={<Projects />}>
          <Route path="vision"element={<Vision />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
