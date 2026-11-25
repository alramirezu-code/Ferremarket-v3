import { Link } from "react-router-dom"
export default function BlogPaneles() {
    return(
    <main class="container my-5">

        <article class="card p-4">

            <img
                src="img/Taladro.webp"
                class="img-fluid rounded mb-4"
                alt=""/>

            <h1 class="text-dark">
                Paneles para renovar tus espacios
            </h1>

            <p class="text-dark">
                Los paneles decorativos permiten cambiar la apariencia de
                diferentes espacios de una manera rápida y práctica.
            </p>

            <p class="text-dark">
                Existen diferentes materiales, diseños y terminaciones que pueden
                utilizarse dependiendo del lugar donde serán instalados y del
                resultado que se quiera conseguir.
            </p>

            <p class="text-dark">
                Antes de realizar la instalación es recomendable medir
                correctamente la superficie, preparar el área de trabajo y
                utilizar los elementos adecuados para lograr una buena
                terminación.
            </p>
            
            <Link to="/Blogs">
                Volver a Blogs
            </Link>

        </article>

    </main>
    )
}