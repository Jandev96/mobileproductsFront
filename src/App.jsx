// src/App.js
import React from 'react';

import ProductList from './components/ProductList';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      
      <Navbar/>
      
      <ProductList />
    </div>
  );
}

export default App;