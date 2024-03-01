import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    const { username, password, error } = this.state;

    return (
      <div className="login-container">
        <h2>Login</h2>
        <div className="login-form">
          <label>
            Usuário:
            <input type="text" name="username" value={username} onChange={this.handleInputChange} />
          </label>
          <label>
            Senha:
            <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
