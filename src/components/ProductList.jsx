// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/style.css"
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="price">Price: ${product.price}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;