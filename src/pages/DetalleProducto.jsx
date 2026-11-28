import { Link } from "react-router-dom"
export default function DetalleProducto() {
    return(
        <main class="container my-5">

            <h1 class="text-center mb-4">
                Detalle del producto
            </h1>

            <section id="detalleProducto">
                <div className="card-body">

                  <img src={prod.imagenUrl} alt=""  height="200" width="200" />
                  <h5 className="card-title">{prod.nombreproducto}</h5>
                  <p className="card-text">Descripcion: ${prod.descripcion}</p>
                  <p className="card-precio">Precio: ${prod.precio}</p>
                  <button type="submit" className="btn btn-primary w-100">
                    <Link to="/DetalleProducto" className="linkColor">
                        Más informacion
                    </Link>
                  </button>

                </div>
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