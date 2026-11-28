import { Link } from "react-router-dom"
export default function Admin() {
    return(
        <section
                id="admin-inicio"
                class="admin-seccion solo-admin">

                <h1>
                    Tu carrito
                </h1>

                <div id="lista-carrito"></div>

        </section>
    )
}