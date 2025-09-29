import { Link, Outlet } from "react-router";

export default function Projects() {
  return (
    <>
    <h1>Projects</h1>
    {/* if the route not absolute (if nested) it must not have backslash / */}
    <Link to={"vision"}>Vision</Link>
    {/* after clicked, the url will be projects/vision */}

    <main>
        {/* if Nesting, the parent should render there Child by doing Outlet */}
        <Outlet />
    </main>
    </>
  )
}
