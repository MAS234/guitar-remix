import {Outlet, useOutletContext} from "@remix-run/react"
import stylesGuitarras from "~/Styles/guitarras.css"


export function links(){
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    }
  ]
}

function Tienda() {


  return (
    <main className="contenedor">     
     <Outlet
     context={useOutletContext()}
     />
    </main>
  )
}

export default Tienda
