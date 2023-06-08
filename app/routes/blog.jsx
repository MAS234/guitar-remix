import { Outlet } from "@remix-run/react"
import styleBlog from "~/Styles/blog.css"


export function links(){
  return[
    {
      rel:"stylesheet",
      href: styleBlog
    }
  ]
}


function Blog() {

  return (
    <main className="contenedor">
      <Outlet/>
    </main>
  )
}

export default Blog
