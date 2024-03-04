import React from 'react';

class ProductCard extends React.Component { 
  render() {
    const { id, name, price, brand, model, color } = this.props;
    return (
      <div className='card col-lg-3 col-md-6 col-sm-12 m-2'>
        <div className="card-body">
        <h2 className="font-weight-bold">{name}</h2>
        <div className="price bg-light">
          <h4 className="font-weight-bold">
            {`R$ ${price}`}
          </h4>
        </div>
        <div>
          <p>{brand}</p>
          <p>{model}</p>
          <p>{color}</p>
        </div>
        <div>
          <button class="btn btn-warning mx-2">
            Editar
          </button>
          <button class="btn btn-danger">Excluir</button>
        </div>
        </div>
      </div>
  );
  }
};

export default ProductCard;