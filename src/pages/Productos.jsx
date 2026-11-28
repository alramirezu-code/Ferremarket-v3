import { useState, useEffect } from 'react';
import { obtenerProductos } from "../services/api";
import { Link } from "react-router-dom"

export default function Productos() {
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
                  <h5 className="card-title">{prod.nombreproducto}</h5>
                  <p className="card-text">Descripcion: ${prod.descripcion}</p>
                  <p className="card-precio">Precio: ${prod.precio}</p>
                  <button type="submit" className="btn btn-primary w-100">
                    <Link to="/DetalleProducto" className="linkColor">
                        Más informacion
                    </Link>
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
