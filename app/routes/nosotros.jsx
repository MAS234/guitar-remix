import imagen from "../../public/img/nosotros.jpg"
import StylesNosotros from "../Styles/nosotros.css"

export function meta(){
  return {
    title: "Sobre Nosotros",
    description: "Vente de guitarras y mas"
  }
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: StylesNosotros
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">

      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen Guitarra" />

        <div>
          <p>
          Cras et dapibus massa. Donec ut elementum elit. Maecenas dignissim interdum condimentum. Mauris ornare sapien magna. Integer euismod libero et tellus volutpat, at faucibus enim placerat. Donec tempus libero mi, vel finibus enim tincidunt vitae. Nullam faucibus elit id vestibulum ultricies.
          </p>

          <p>
          Cras et dapibus massa. Donec ut elementum elit. Maecenas dignissim interdum condimentum. Mauris ornare sapien magna. Integer euismod libero et tellus volutpat, at faucibus enim placerat. Donec tempus libero mi, vel finibus enim tincidunt vitae. Nullam faucibus elit id vestibulum ultricies.
          </p>
        </div>
      </div>

      

    </main>
  )
}

export default Nosotros
