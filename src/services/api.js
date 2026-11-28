import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/api',
});

// Productos
export const obtenerProductos = () => api.get('/productos');
export const crearProducto = (producto) => api.post('/productos', producto);


// Categorías
export const obtenerCategorias = () => api.get('/categorias');



export default api;