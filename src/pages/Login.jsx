import React, { Component } from 'react';
import './css/Login.css'
import Swal from 'sweetalert2'
import { requestPost } from '../utils/requests';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: 'Preencha todos os campos' });
      return;
    }
    requestPost('/user/signIn', { email, password })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = "/produtos"
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
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      });

  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="container-fluid">
        <div className='row justify-content-center align-items-center'>
          <form className="w-50 mt-5">
            <h2 className="mb-3 fw-bold text-light">Login</h2>
            <div id="input-login-box">
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
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>
            <div className="my-3 text-center">
              {error && <p className="error-message">{error}</p>}
              <button className="btn-outline-custom" onClick={this.handleLogin}>Login</button>
              <div className='fixed-bottom '>
                <sub className="text-light">Ainda não possui uma conta?</sub>
                <a
                  href="/registro"
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

export default Login;
