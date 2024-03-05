import React, { Component } from "react"

class ProductForm extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.handleInputChange(name, value);
  };

  render() {
    const { name, price, brand, model, color, handleButtonClick  } = this.props;
    return (
      <form className="form-control">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" value={name} onChange={this.handleChange} className="form-control" id="name" name="name" />
          {!name && <i className="text-danger">Nome é obrigatório.</i>}
          
        </div>
        <div className="form-group my-2">
            <label htmlFor="brand">Marca:</label>
            <input type="text" value={brand} onChange={this.handleChange} className="form-control" id="brand" name="brand" />
            {!brand && <i className="text-danger">Marca é obrigatório.</i>}
            
        </div>
        <div className="form-group my-2">
            <label htmlFor="model">Modelo:</label>
            <input type="text" value={model} onChange={this.handleChange} className="form-control" id="model" name="model" />
            {!model && <i className="text-danger">Modelo obrigatório.</i>}
            
        </div>
        <div className="form-group my-2">
            <label htmlFor="color">Cor:</label>
            <input type="text" value={color} onChange={this.handleChange} className="form-control" id="color" name="color" />
            {!color && <i className="text-danger">Cor é obrigatório.</i>}
            
        </div>
        <div className="form-group">
            <label htmlFor="price">Preço:</label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">R$</span>
                </div>
                <input type="number" value={price} onChange={this.handleChange} className="form-control" id="price" name="price" />
                {!price && <i className="text-danger">Preço é obrigatório.</i>}
            </div>
        </div>
        <a href="/produtos" className="btn btn-secondary mx-2">Voltar</a>
        <button type="submit" onClick={handleButtonClick} className="btn btn-primary my-2">Ok</button>
      </form>
    );
  }
}

export default ProductForm;
