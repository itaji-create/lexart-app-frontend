import React, { Component } from 'react';
import Swal from 'sweetalert2'
import ProductCard from '../components/ProductCard';
import { requestGet } from '../utils/requests';

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
      .then((data) => this.setState({ products: this.state.products.concat(data) }))
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

  render() {
    const { products } = this.state;

    return (
      <div>
        <h2>Products</h2>
        <a href='/product/create' className="btn btn-success">
          <i class="bi bi-plus"></i>
          Criar produto
        </a>
        <div className='container'>
          <div className='row flex-wrap'>
            {products && products.map((e) => (
              <ProductCard name={e.name} brand={e.brand} model={e.model} price={e.price} color={e.color} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
