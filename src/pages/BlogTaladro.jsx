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
                            <a className="nav-link" href="blogs.html">Blogs</a>
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

        <main className="container my-5">

            <article className="card p-4">

                <img
                    src="img/Taladro.webp"
                    className="img-fluid rounded mb-4"
                    alt="Taladro">
                </img>

                <h1 className="text-dark">
                    Cómo elegir un taladro
                </h1>

                <p className="text-dark">
                    El taladro es una de las herramientas más utilizadas en trabajos
                    de construcción, reparación y mejoramiento del hogar.
                </p>

                <p className="text-dark">
                    Antes de elegir uno es importante considerar el tipo de trabajo
                    que se realizará. Para tareas simples puede ser suficiente un
                    taladro de uso doméstico, mientras que para trabajos más exigentes
                    puede ser necesario utilizar una herramienta de mayor potencia.
                </p>

                <p className="text-dark">
                    También es importante considerar características como el tamaño,
                    el tipo de alimentación, la velocidad y la posibilidad de utilizar
                    diferentes brocas y accesorios.
                </p>

                <a href="blogs.html" className="btn btn-primary">
                    Volver a Blogs
                </a>

            </article>

        </main>
    </div>
)