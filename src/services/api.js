import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// La palabra "export" aquí es obligatoria para poder usar { obtenerProductos }
export const obtenerProductos = () => api.get('/productos');

export default api;