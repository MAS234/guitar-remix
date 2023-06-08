import { Link } from "@remix-run/react"
import { formatearFechas } from "~/utils/helpers"

function BlogPost({blog}) {

  const {contenido, imagen, url, tutilo, publishedAt} = blog

  return (
    <article className='blogs'>
      <img className='imagen' src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${tutilo}`} />
      <div className='contenido'>
        <h3>{tutilo}</h3>
        <p className="fecha">{formatearFechas(publishedAt)}</p>
        <p className='resumen'>{contenido}</p>
        <Link className="enlace" to={`/blog/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
}

export default BlogPost
