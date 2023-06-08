import { useLoaderData } from "@remix-run/react"
import {getGuitarras} from "~/models/guitarras.server"
import {getBlogs} from "~/models/blogs.server"
import { getCurso } from "~/models/curso.server"
import ListadoGuitarras from "~/componets/listadoGuitarras"
import ListadoBlogs from "~/componets/listadoBlogs"
import Curso from "~/componets/curso"
import stylesGuitarras from "~/Styles/guitarras.css"
import styleBlog from "~/Styles/blog.css"
import styleCurso from "~/Styles/curso.css"


export async function loader(){

  const [guitarras, blogs, curso] = await Promise.all([
    getGuitarras(),
    getBlogs(),
    getCurso()
  ])

  return {
    guitarras:guitarras.data,
    blogs:blogs.data,
    curso:curso.data
  }
}

export function links(){
  return[
    {
      rel:"stylesheet",
      href:stylesGuitarras
    },
    {
      rel:"stylesheet",
      href:styleBlog
    },
    {
      rel:"stylesheet",
      href:styleCurso
    }
  ]
}

export function meta(){

}

function Index() {

  const {guitarras, blogs, curso} = useLoaderData();

  return (
  <>
  <main className="contenedor">

    <ListadoGuitarras
    guitarras={guitarras}
    />

  </main>

  <Curso
  curso={curso.attributes}
  />

  <section className="contenedor">
  <ListadoBlogs
    blogs={blogs}
    />

  </section>
  </>
  )
}

export default Index
