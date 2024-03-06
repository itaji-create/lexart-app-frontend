import React, { Component } from 'react';
import Swal from 'sweetalert2'
import { requestGet, requestPut } from '../utils/requests';
import ProductForm from '../components/ProductForm';
import Header from '../components/Header';

class UpdateProduct extends Component {
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

  componentDidMount() {
    const token = localStorage.getItem('token');
    const url = window.location.pathname;
    const regex = /\/produto\/(\d+)/;
    const id = url.match(regex)[1] || 1;
    console.log(id);

    requestGet(`/api/products/${id}`, token)
      .then((data) => this.setState(data))
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

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    requestPut(`/api/products/${this.state.id}`, this.state, token)
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Produto alterado com sucesso!",
          showConfirmButton: false,
          timer: 1500
        });
        window.location.href = '/produtos'
    })
    .catch((error) => {
      let timerInterval;
      Swal.fire({
        title: error.message,
        html: "Por favor, confira os dados e tente novamente.",
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
      <div>
        <Header />
        <div className='card m-5'>
          <ProductForm
            name={name}
            brand={brand}
            model={model}
            price={price}
            color={color}
            handleInputChange={this.handleInputChange}
            handleButtonClick={this.handleClick}
            btnName='Alterar'
          />
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
