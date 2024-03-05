import React, { Component } from 'react';
import Swal from 'sweetalert2'
import ProductCard from '../components/ProductCard';
import { requestGet } from '../utils/requests';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/Header';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    requestGet('/api/products', token)
      .then((data) => this.setState({ products: data }))
      .catch((error) => {
        Swal.fire({
          title: "Necessário validação",
          text: "Por favor, faça o login para seguir nessa página",
          icon: "warning"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        });
        console.error('Erro na requisição:', error)
      });
  }

  handleSearch = (searchTerm) => {
    const token = localStorage.getItem('token');
    requestGet(`/api/products/search/${searchTerm}`, token)
      .then((data) => this.setState({ products: data }))
      .catch((error) => {
        Swal.fire({
          title: "Campo de busca vazio!",
          text: "Por favor, digite sua buscars",
          icon: "warning"
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
        console.error('Erro na requisição:', error)
      });
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        <Header />
        <SearchComponent onSearch={this.handleSearch} />
        <div className='container'>
          <div className='row flex-wrap'>
            {products && products.map((e) => (
              <ProductCard key={e.id} id={e.id} name={e.name} brand={e.brand} model={e.model} price={e.price} color={e.color} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
