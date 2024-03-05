import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="d-flex m-2 justify-content-between">
        <h2>Lexart App</h2>
        <div>
          <a href='/product/create' className="btn btn-success m-2">
            <i className="bi bi-plus"></i>
            Criar produto
          </a>
          <a href='/' className="btn btn-danger">
            <i class="bi bi-box-arrow-right" />
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default Header;