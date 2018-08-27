import React, { Component } from 'react';
import ProductList from './components/ProductList';
import NewProduct from './components/NewProduct';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Shopping App</h1>
        <div className="App">
          <div className = "Vendedor">
            <ProductList />
            <NewProduct />
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
