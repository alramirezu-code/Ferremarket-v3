import { useState, useEffect } from 'react';
import { obtenerProductos } from './services/api';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import './App.css'



function Inicio() {
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
      

     

      {/* Sección donde se muestran los datos del microservicio */}
      <div className="container mt-4">
        <h2>Productos disponibles</h2>
        
      

        <div className="row">
          {productos.map((prod) => (
            <div className="col-md-4 mb-3" key={prod.id}>
              <div className="card">
                <div className="card-body">

                  <img src={prod.imagenUrl} alt=""  height="200" width="200" />
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

export default function App() {
  return (
    <BrowserRouter>
     
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
                 <a className='nav-link'>   <Link to="/">Inicio</Link></a>
               
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>

              <li className="nav-item">
                <a className='nav-link'>   <Link to="/Blogs">Blogs</Link></a>
               
              </li>

              <li className="nav-item">
                <a className='nav-link'> <Link to="/Contacto">Contacto</Link></a>
                 
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">inicio sesion</a>
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
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
