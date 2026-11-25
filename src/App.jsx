import { useState, useEffect } from 'react';
import { obtenerProductos } from './services/api';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import './App.css'
import BlogTaladro from './pages/BlogTaladro';
import BlogPaneles from './pages/BlogPaneles';

function Inicio() {
  return(
    <h1>Hola Mundo</h1>
  )
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
                <a className='nav-link'>   <Link to="/Productos">Productos</Link></a>
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
        <Route path="/Productos" element={<Productos/>} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/BlogTaladro" element={<BlogTaladro />} />
        <Route path="/BlogPaneles" element={<BlogPaneles />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
