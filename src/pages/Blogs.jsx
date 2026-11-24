export default function Blogs() {

    return(
       <div>

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