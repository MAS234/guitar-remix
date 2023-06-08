import { useLoaderData } from "@remix-run/react";
import { getBlog } from "~/models/blogs.server"
import { formatearFechas } from "~/utils/helpers";

export function meta({data}){

    if(!data){
        return{
            title: "Entrada no encontrada",
            description: `Venta de guitarras. Entrada no encontrada.`
        }
    }
    
    return{
        title: `${data.data[0].attributes.tutilo}`,
        description: `Venta de guitarras ${data.data[0].attributes.tutilo}`
    }
}

export async function loader({params}){
    const {blogUrl} = params
    const blogs = await getBlog(blogUrl);

    if(blogs.data.length === 0){
        throw new Response("", {
            status: 404,
            statusText: "Entrada no encontrada"
        })
    }


    return blogs
}

function $BlogUrl() {

    const blog = useLoaderData();
    console.log(blog)
    
    const {tutilo, contenido, imagen, publishedAt} = blog?.data[0]?.attributes

  return (
    <article className="blogs mt-3">
              <img className='imagen' src={imagen.data.attributes.url} alt={`imagen blog ${tutilo}`} />
      <div className='contenido'>
        <h3>{tutilo}</h3>
        <p className="fecha">{formatearFechas(publishedAt)}</p>
        <p className='texto'>{contenido}</p>
      </div>
    </article>
  )
}

export default $BlogUrl
