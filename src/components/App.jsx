import React from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import '../css/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Products />
        <Cart />
      </div>
    </div>
  )
}

export default App;
