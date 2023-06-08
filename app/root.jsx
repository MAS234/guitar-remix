import { useState, useEffect } from "react"
import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'


import{
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from "@remix-run/react"

import styles from "~/Styles/index.css"
import Header from "~/componets/header"
import Footer from "~/componets/footer"

export function meta() {
    return(
        {
            charset: "utf-8",
            title: "Guitar - Remix",
            viweport: "width=device-width,initial-scale=1"
        }
    )
}


export function links() {
    return[
        {
            rel:"stylesheet",
            href:"https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel:"stylesheet",
            href:styles
        },
        {
            rel:"preconnect",
            href:"https://fonts.googleapis.com"
        },
        {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            // crossorigin:"true"

        },
        {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
            
        }
    ]
}

export default function App() {

    const carritoLs = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLs);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            
            const carritoActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState;
            })

            setCarrito(carritoActualizado);

        }else{
            //AGREGAR AL CARRITO SI ES UN REGISTRO NUEVO
            setCarrito([...carrito, guitarra])

            Swal.fire({
                title: 'Agregado con Exito',
                text: '',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })

        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)

        Swal.fire({
            title: 'Eliminado con Exito',
            text: '',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
    }

    return(
        <Document>
            <Outlet
            context={{
                agregarCarrito,
                carrito,
                actualizarCantidad,
                eliminarGuitarra
            }}
            />
        </Document>
    )
}


function Document({children}) {
    return(
        <html lang="Es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>

                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

/* MANEJO DE ERRORES */

export function CatchBoundary(){
    const error = useCatch()
    return (
        <Document>
            <p className="error"><span className="errorNumero">{error.status}</span> {error.statusText}</p>
            <Link className="error-enlace" to="/">Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )

}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className="error">{error.status} {error.status.Text}</p>
            <Link to="/">Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}