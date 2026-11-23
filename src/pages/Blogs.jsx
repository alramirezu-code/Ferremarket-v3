export default function Blogs() {

    return(
       <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="index.html">FerreMarket</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="productos.html">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Blogs.html">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Nosotros.html">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="inicio sesion.html">Iniciar Sesión</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container my-5">

                <h1 className="text-center mb-4">Blog FerreMarket</h1>
                <p className="descripcion">
                    Consejos, información y recomendaciones para tus proyectos.
                </p>
                    <section className="contenedor-blogs">

                        <article className="card blog-card">

                            <img
                                src="img/Taladro.webp"
                                className="card-img-top"
                                alt="Taladro">
                            </img>

                            <div className="card-body">

                                <h3 className="card-title">
                                    Cómo elegir un taladro
                                </h3>

                                <p className="card-text">
                                    Conoce algunos aspectos importantes que debes considerar
                                    al momento de elegir un taladro para tus proyectos.
                                </p>

                            <a href="Blog Taladro.html"
                            className="btn btn-primary">
                                Leer más
                            </a>

                        </div>
                    </article>

                    <article className="card blog-card">

                        <img
                            src="img/Panel_metal_look_madera.webp"
                            className="card-img-top"
                            alt="Panel con apariencia de madera">
                        </img>

                        <div className="card-body">

                            <h3 className="card-title">
                                Paneles para renovar tus espacios
                            </h3>

                            <p className="card-text">
                                Los paneles decorativos son una alternativa práctica
                                para mejorar distintos espacios del hogar.
                            </p>

                            <a href="Blog Paneles.html"
                            className="btn btn-primary">
                                Leer más
                            </a>

                        </div>
                    </article>
                </section>
            </div>
            
        </div>
    )
}