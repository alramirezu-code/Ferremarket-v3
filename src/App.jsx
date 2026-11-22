import { useState, useEffect } from 'react';
import { obtenerProductos } from './services/api';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



function App() {
  // Estado para guardar los productos que vienen de Spring Boot
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  // Se ejecuta automáticamente al cargar la página
  useEffect(() => {
    obtenerProductos()
      .then((response) => {
        setProductos(response.data);
      })
      .catch((err) => {
        console.error('Error al conectar con el microservicio:', err);
        setError('No se pudieron cargar los productos.');
      });
  }, []);

return (
  <div className="app">

    {/* NAVBAR */}
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Ferre<span className="brand-highlight">Market</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contactos</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Inicio Sesión</a>
            </li>
          </ul>

          <form className="d-flex search-form">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar"
            />

            <button className="btn btn-neon" type="submit">
              Buscar
            </button>
          </form>

        </div>
      </div>
    </nav>


      {/* Sección donde se muestran los datos del microservicio */}
      <div className="container mt-4">
        <h2>Productos disponibles</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row">
          {productos.map((prod) => (
            <div className="col-md-4 mb-3" key={prod.id}>
              <div className="card">
                <div className="card-body">
                  {/* Ajusta .nombre y .precio según los atributos de tu clase en Java */}
                  <h5 className="card-title">{prod.nombre}</h5>
                  <p className="card-text">Precio: ${prod.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
