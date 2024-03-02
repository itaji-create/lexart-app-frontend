import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const itens = JSON.parse(localStorage.getItem('cartItens'));
    if (itens) {
      const prod = itens.find((e) => e.id === id);
      if (prod) {
        this.setState({ quantity: this.state.quantity });
      }
    }
  }
  
  render() {
    const { id, urlImage, name, price } = this.props;

    const addProduct = () => {
      let cartItens = JSON.parse(localStorage.getItem('cartItens'));
  
      if (!cartItens) {
        cartItens = [];
      }
      if (cartItens.some((e) => e.id === id)) {
        const prod = cartItens.find((e) => e.id === id);
        prod.quantity += 1;
        this.setState({ quantity: prod.quantity });
      } else {
        this.setState({ quantity: 1 });
        cartItens.push({ id, price, urlImage, name, quantity: 1 });
      }
      localStorage.setItem('cartItens', JSON.stringify(cartItens));
    };
  
    const removeProduct = () => {
      let cartItens = JSON.parse(localStorage.getItem('cartItens'));
  
      if (!cartItens) {
        cartItens = [];
      }
      if (cartItens.some((e) => e.id === id)) {
        const prod = cartItens.find((e) => e.id === id);
        prod.quantity -= 1;
        this.setState({ quantity: prod.quantity });
        if (prod.quantity <= 0) {
          cartItens.splice(cartItens.indexOf(prod), 1);
        }
      }
      localStorage.setItem('cartItens', JSON.stringify(cartItens));
    };

    return (
      <div className="col-md-4 mb-4">
      <div className="card">
        <img src={ urlImage } className="card-img" alt="Imagem do Produto" />
        <div className="card-body">
          <h6 className="font-weight-bold">{name}</h6>
          <div className="price bg-light">
            <h4 className="font-weight-bold">
              {`R$ ${price.replace('.', ',')}`}
            </h4>
          </div>
          <div className="row">
            <div className="col-md-4">
              <button
                className="btn btn-primary"
                type="button"
                onClick={ removeProduct }
              >
                -
              </button>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control text-center"
                id="unitInput"
                value={ this.state.quantity }
              />
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-primary"
                type="button"
                onClick={ addProduct }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
};

export default ProductCard;