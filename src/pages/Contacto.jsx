import { Link } from 'react-router-dom';

export default function Contacto() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">FerreMarket</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contactos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Iniciar Sesión</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

      <main className="container my-5" style={{ maxWidth: '700px' }}>
        <h1 className="text-center mb-4">Contacto</h1>

        <section className="bg-white text-dark p-4 rounded shadow-sm">
          <form id="form-contacto" noValidate>
            <div className="mb-3">
              <label htmlFor="contactoNombre" className="form-label">
                Nombre *
              </label>
              <input
                type="text"
                className="form-control"
                id="contactoNombre"
                maxLength={100}
                required
              />
              <div className="invalid-feedback">
                El nombre es obligatorio y debe tener máximo 100 caracteres.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="contactoCorreo" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="contactoCorreo"
                maxLength={100}
              />
              <div className="invalid-feedback">
                Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="contactoComentario" className="form-label">
                Comentario *
              </label>
              <textarea
                className="form-control"
                id="contactoComentario"
                rows={5}
                maxLength={500}
                required
              ></textarea>
              <div className="invalid-feedback">
                El comentario es obligatorio y debe tener máximo 500 caracteres.
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>
    </>
  );
}