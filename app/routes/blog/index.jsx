import { getBlogs } from "~/models/blogs.server"
import { useLoaderData } from "@remix-run/react"
import ListadoBlogs from "~/componets/listadoBlogs"

export function meta(){
  return{
      title:"Nuestro blog",
      description:"Blog de musica y venta de guitarras"
  }
}

export async function loader(){
  const blogs = await getBlogs()
  return blogs?.data
}

function Blog() {

  const blogs = useLoaderData();

  return (
      <ListadoBlogs
      blogs={blogs}
      />
  )
}

export default Blog
