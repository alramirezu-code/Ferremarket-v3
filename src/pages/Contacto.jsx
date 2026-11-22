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
                            <a className="nav-link" href="Nosotros.html">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contactos.html">Contactos</a>
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

        <main className="container my-5" style="max-width: 700px;">

            <h1 className="text-center mb-4">Contacto</h1>

            <section className="bg-white text-dark p-4 rounded shadow-sm">

                <form id="form-contacto" novalidate>

                    <div className="mb-3">
                        <label for="contactoNombre" className="form-label">
                            Nombre *
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            id="contactoNombre"
                            maxlength="100"
                            required>
                        </input>
                        <div className="invalid-feedback">
                            El nombre es obligatorio y debe tener máximo 100 caracteres.
                        </div>
                    </div>


                    <div className="mb-3">
                        <label for="contactoCorreo" className="form-label">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            id="contactoCorreo"
                            maxlength="100">
                        </input>
                        <div className="invalid-feedback">
                            Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.
                        </div>
                    </div>


                    <div className="mb-3">
                        <label for="contactoComentario" className="form-label">
                            Comentario *
                        </label>

                        <textarea
                            className="form-control"
                            id="contactoComentario"
                            rows="5"
                            maxlength="500"
                            required>
                        </textarea>

                        <div className="invalid-feedback">
                            El comentario es obligatorio y debe tener máximo 500 caracteres.
                        </div>
                    </div>


                    <button
                        type="submit"
                        className="btn btn-primary w-100">

                        Enviar mensaje

                    </button>

                </form>

            </section>

        </main>
    </div>
)