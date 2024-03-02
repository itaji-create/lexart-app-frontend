import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'itaji',
      price: '123456',
      urlImage: 'https://http2.mlstatic.com/D_NQ_NP_744727-MLB72917677198_112023-O.webp',
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  handleLogin = () => {
    const { username, password } = this.state;

    if (!username || !password) {
      this.setState({ error: 'Preencha todos os campos' });
      return;
    }

    console.log('Autenticação bem-sucedida!');
  };

  render() {
    const { name, price, urlImage } = this.state;

    return (
      <div className="login-container">
        <h2>Products</h2>
        <div className="login-form">
          <ProductCard id={1} urlImage={urlImage} name={name} price={price} />
        </div>
      </div>
    );
  }
}

export default Products;
