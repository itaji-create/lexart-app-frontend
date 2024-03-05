import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container d-flex m-2 justify-content-between">
        <h2>Lexart App</h2>
        <a href='/product/create' className="btn btn-success">
          <i className="bi bi-plus"></i>
          Criar produto
        </a>
      </div>
    );
  }
}

export default Header;