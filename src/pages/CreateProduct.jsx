import React, { Component } from 'react';
import Swal from 'sweetalert2'
import { requestPost } from '../utils/requests';
import ProductForm from '../components/ProductForm';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      brand: '',
      model: '',
      price: '',
      color: ''
    };
  }

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    requestPost('/api/products', this.state, token)
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Produto criado com sucesso!",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.href = '/produtos'
    })
    .catch((error) => {
      let timerInterval;
      Swal.fire({
        title: error.message,
        html: "Por favor, confira seus dados e tente novamente.",
        timer: 3000,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      });
    });
  }

  render() {
    const { name, brand, model, price, color } = this.state;
    return (
      <div className='card'>
        <ProductForm
          name={name}
          brand={brand}
          model={model}
          price={price}
          color={color}
          handleInputChange={this.handleInputChange}
          handleButtonClick={this.handleClick}
        />
      </div>
    );
  }
}

export default CreateProduct;
