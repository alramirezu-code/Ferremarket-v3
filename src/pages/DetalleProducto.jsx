import { Link } from "react-router-dom"
export default function DetalleProducto() {
    return(
        <main class="container my-5">

            <h1 class="text-center mb-4">
                Detalle del producto
            </h1>

            <section id="detalleProducto">
            </section>


            <div id="toast-notificacion" class="toast-oculto">
                <span id="toast-icono">🛒</span>
                <span id="toast-mensaje">Producto agregado al carrito</span>
            </div>


            <section id="vista-carrito" class="carrito" style="display: none;">

                <h2>🛒 Tu Carrito de Compras</h2>
                <div id="lista-carrito"></div>
                <div id="resumen-carrito"></div>

            </section>
        </main>
    )
}