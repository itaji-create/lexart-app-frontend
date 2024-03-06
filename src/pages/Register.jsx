import React, { Component } from 'react';
import './css/Login.css';
import { requestPost } from '../utils/requests';
import Swal from 'sweetalert2';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { email, password, name } = this.state;

    if (!email || !password || !name) {
      this.setState({ error: 'Preencha todos os campos' });
      return;
    }
    requestPost('/user/signUp', { name, email, password })
      .then((user) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuário criado com sucesso!",
          showConfirmButton: false,
          timer: 1500
        }).then(() => window.location.href = "/login");
      })
      .catch((error) => {
        let timerInterval;
        Swal.fire({
          title: error.message,
          html: error.response.data.message,
          timer: 3000,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        });
      });

  };

  render() {
    const { name, email, password, error } = this.state;

    return (
      <div className="container-fluid">
        <div className='row justify-content-center align-items-center'>
          <form className="w-50 mt-5">
            <h2 className="mb-3 fw-bold text-light">Inscrever-se</h2>
            <div id="input-login-box">
              <div className="form-floating">
                <input
                  type="text"
                  name="name"
                  className="form-control mb-2"
                  id="floatingInput"
                  value={name}
                  onChange={ this.handleInputChange }
                />
                <label htmlFor="floatingInput">Nome Completo</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  name="email"
                  className="form-control mb-2"
                  id="floatingInput"
                  value={email}
                  onChange={ this.handleInputChange }
                />
                <label htmlFor="floatingInput">Endereço de E-mail</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="floatingPassword"
                  value={password}
                  onChange={ this.handleInputChange }
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
            </div>
            <div className="my-3 text-center">
              {error && <p className="error-message">{error}</p>}
              <button className="btn-outline-custom" onClick={ this.handleClick }>Criar Usuário</button>
              <div className='fixed-bottom '>
                <sub className="text-light">Já possui uma conta?</sub>
                <a
                  href="/login"
                  style={ { color: '#f47521' } }
                  className="btn fw-bold"
                  type="button"
                >
                  CLIQUE AQUI
                </a>
              <p className="text-body-secondary">© 2024</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
