import styleCarrito from "~/Styles/carrito.css";
import { useOutletContext } from "react-router-dom";
import { ClientOnly } from "remix-utils";
import { useState, useEffect } from "react";

export function meta() {
  return {
    title: "Carrito-Compras",
    description: "Venta de guitarras",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styleCarrito,
    },
  ];
}

function Carrito() {
  const [total, setTotal] = useState(0);

  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );

    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <ClientOnly fallback={"cargando..."}>
     {() => (
         <main className="contenedor">
         <h1 className="heading">Carrito de compras</h1>
 
         <div className="contenido">
           <div className="carrito">
             <h2>Articulos</h2>
 
             {carrito?.length === 0
               ? "Carrito Vacio"
               : carrito?.map((producto) => (
                   <div key={producto.id} className="producto">
                     <div>
                       <img
                         src={producto.imagen}
                         alt={`Imagen del productos ${producto.imagen}`}
                       />
                     </div>
 
                     <div>
                       <p className="nombre">{producto.nombre}</p>
 
                       <p className="precio">
                         Precio Unidad: $ <span>{producto.precio}</span>
                       </p>
 
                       <p className="cantidad">Cantidad</p>
 
                       <select
                         value={producto.cantidad}
                         className="select"
                         onChange={(e) =>
                           actualizarCantidad({
                             cantidad: e.target.value,
                             id: producto.id,
                           })
                         }
                       >
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                       </select>
 
                       <p className="subtotal">
                         Subtotal: $
                         <span>{producto.cantidad * producto.precio}</span>
                       </p>
                     </div>
 
                     <button
                       type="button"
                       className="eliminar"
                       onClick={() => eliminarGuitarra(producto.id)}
                     >
                       Eliminar
                     </button>
                   </div>
                 ))}
           </div>
 
           <aside className="resumen">
             <h3>Resumen del pedido</h3>
             <p>Total a pagar: ${total}</p>
           </aside>
         </div>
       </main>
     )}
    </ClientOnly>
  )
}

export default Carrito;
