// src/pages/AdminPage.jsx
import { useState, useEffect } from 'react';
import '../styles/AdminPage.css';

export const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nombre || !imagen) {
      alert('Por favor completa todos los campos');
      return;
    }

    const newProduct = {
      id: Date.now(),
      nombre: nombre,
      imagen: imagen,
      link: "/*"
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    setNombre('');
    setImagen('');
    setShowForm(false);
  };

  return (
    <div className="admin-page-container">
      <div className="container admin-content">
        <div className="admin-header">
          <h1 className="admin-title">🛠️ Panel de Administración</h1>
          <button 
            className="btn btn-primary btn-lg admin-add-btn"
            onClick={() => setShowForm(true)}
          >
            ➕ Agregar Producto
          </button>
        </div>

        {showForm && (
          <div className="card mb-4 admin-form-card">
            <div className="card-header admin-form-header">
              <h5 className="mb-0">Agregar Nuevo Producto</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label"><strong>Nombre del Producto</strong></label>
                  <input
                    type="text"
                    className="form-control form-control-lg admin-form-input"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: Auriculares Gamer"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label"><strong>URL de la Imagen</strong></label>
                  <input
                    type="text"
                    className="form-control form-control-lg admin-form-input"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    placeholder="https://ejemplo.com/imagen.jpg"
                    required
                  />
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-success btn-lg">
                    ✅ Agregar Producto
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-lg"
                    onClick={() => {
                      setShowForm(false);
                      setNombre('');
                      setImagen('');
                    }}
                  >
                    ❌ Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="card admin-products-card">
          <div className="card-header admin-products-header">
            <h5 className="mb-0">📦 Productos ({products.length})</h5>
          </div>
          <div className="card-body">
            {products.length === 0 ? (
              <p className="text-center text-muted">No hay productos en el sistema</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id}>
                        <td><strong>{product.id}</strong></td>
                        <td>
                          <img 
                            src={product.imagen} 
                            alt={product.nombre}
                            className="admin-table-img"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/60x60/dc3545/ffffff?text=Error';
                            }}
                          />
                        </td>
                        <td className="admin-product-name">
                          {product.nombre}
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm admin-delete-btn"
                            onClick={() => {
                              if (window.confirm(`¿Eliminar "${product.nombre}"?`)) {
                                handleDelete(product.id);
                              }
                            }}
                          >
                            🗑️ Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};