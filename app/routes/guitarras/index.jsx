import {useLoaderData} from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from "~/componets/listadoGuitarras"

export function meta(){
  return{
    title:"Tienda-Guitarras",
    description:"GUITARRAS - Nuestra coleccion de guitarras"
  }
}

export async function loader(){

  const guitarras = await getGuitarras();

  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData();

  return (
     <ListadoGuitarras
     guitarras={guitarras}
     />
  )
}

export default Tienda
