import { BrowserRouter, Route, Routes } from "react-router"
import LayoutPage from "./pages/LayoutPage"
import Home from "./pages/Home"
import AboutUs from "./pages/aboutUs"
import Blog from "./pages/Blog"
// import LayoutPage from "./pages/LayoutPage"

function App() {
  return (
    <BrowserRouter> //This is only can have only one for a app
      <Routes>
        <Route path="/" element={<LayoutPage/>}> //Nested Routing
          <Route index element={<Home/>} />      // Child Routings x2
          <Route path="about" element={<AboutUs/>} />
        </Route>
        <Route path="/blog" element={<Blog/>} /> //Parent Route
      </Routes>
    </BrowserRouter>
  )
}

export default App
