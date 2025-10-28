import React, { useState } from 'react';
import '../styles/AdminPage.css'; 

/*Simulacion del back */
const AdminPage = () => {
    // 1. Definición del State para el formulario
    const [productData, setProductData] = useState({
        name: '',
        sku: '',
        price: '',
        originalPrice: '',
        stock: '',
        description: '',
        imageUrl: '',
        category: 'electronica',
        details: '',
    });

    const [message, setMessage] = useState('');

    // Función auxiliar para determinar la clase del mensaje
    const getMessageClass = () => {
        if (!message) return '';
        return message.startsWith('🚀') ? 'feedback-success' : 'feedback-loading';
    };

    // 2. Manejador de cambios para todos los campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // 3. Manejador del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Cargando producto...');
        
        // Lógica de transformación y simulación
        const detailsArray = productData.details.split(',').map(detail => detail.trim()).filter(detail => detail.length > 0);

        const finalProduct = {
            ...productData,
            price: Number(productData.price),
            originalPrice: Number(productData.originalPrice),
            stock: Number(productData.stock),
            details: detailsArray,
            id: Date.now()
        };

        console.log("✅ Producto a Cargar:", finalProduct);

        setTimeout(() => {
            setMessage('🚀 Producto cargado con éxito en la consola.');
            
            // Limpiar el formulario
            setProductData({
                name: '', sku: '', price: '', originalPrice: '', stock: '',
                description: '', imageUrl: '', category: 'electronica', details: '',
            });
            
            // Limpiar el mensaje después de un tiempo
            setTimeout(() => setMessage(''), 3000);
        }, 1500);
    };


    return (
        <div className="admin-page-container">
            <h2>Nuevo producto al Stock</h2>
            
            {message && (
                <p className={`feedback-message ${getMessageClass()}`}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit}>
                
                {/* 1. Nombre y SKU */}
                <div className="form-row"> 
                    <div className="form-col"> 
                        <label htmlFor="name">Nombre del Producto *</label>
                        <input type="text" id="name" name="name" value={productData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-col">
                        <label htmlFor="sku">SKU/Referencia *</label>
                        <input type="text" id="sku" name="sku" value={productData.sku} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-col">
                        <label htmlFor="price">Precio Final ($) *</label>
                        <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} required min="0" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="originalPrice">Precio Original ($)</label>
                        <input type="number" id="originalPrice" name="originalPrice" value={productData.originalPrice} onChange={handleChange} min="0" />
                        <small style={{ color: '#666' }}> (Para mostrar descuento)</small>
                    </div>
                </div>


                <div className="form-row"> 
                    <div className="form-col">
                        <label htmlFor="stock">Stock Inicial *</label>
                        <input type="number" id="stock" name="stock" value={productData.stock} onChange={handleChange} required min="0" />
                    </div>
                    <div className="form-col">
                        <label htmlFor="category">Categoría *</label>
                        <select id="category" name="category" value={productData.category} onChange={handleChange} required>
                            <option value="tecnologia">Tecnología</option>
                            <option value="moda">Moda</option>
                            <option value="hogar">Hogar</option>
                            <option value="accesorios">Accesorios</option>
                            <option value="otros">Otros</option>

                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="description">Descripción del Producto *</label>
                    <textarea id="description" name="description" value={productData.description} onChange={handleChange} required rows="4"></textarea>
                </div>
                

                <div>
                    <label htmlFor="imageUrl">URL de Imagen Principal *</label>
                    <input type="url" id="imageUrl" name="imageUrl" value={productData.imageUrl} onChange={handleChange} required />
                    <small style={{ color: '#666' }}> (Deberías usar un campo de subida de archivos real en un proyecto serio, pero para React sin backend, la URL es más simple).</small>
                </div>
                
                <div style={{ marginBottom: '25px' }}>
                    <label htmlFor="details">Lista de Detalles (Separar por coma) *</label>
                    <textarea id="details" name="details" value={productData.details} onChange={handleChange} required rows="2"></textarea>
                    <small style={{ color: '#666' }}>Ej: "Memoria interna: 128 GB, Cámara trasera: 12 Mpx, Con NFC: Sí"</small>
                </div>



                <button type="submit" className="submit-button"> 
                    Cargar Producto
                </button>
            </form>
        </div>
    );
};


export default AdminPage;