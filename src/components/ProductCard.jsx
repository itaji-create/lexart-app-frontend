import React from 'react';
import { deleteItem } from '../utils/requests';
import Swal from 'sweetalert2'

class ProductCard extends React.Component { 
  deleteProduct = () => {
    const token = localStorage.getItem('token');
    Swal.fire({
      title: "Você tem certeza?",
      text: "Esta ação não pode ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deletado!",
          text: "Produto excluído do banco de dado.",
          icon: "success"
        });
        deleteItem(`/api/products`, this.props.id, token)
          .then(() => window.location.reload())
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
          });
      };
    });  
  };

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
          <a href={`/produto/${id}`} className="btn btn-warning mx-2">
            <i class="bi bi-pencil-square"></i>
            
          </a>
          <button className="btn btn-danger" onClick={this.deleteProduct}>
            <i class="bi bi-trash"></i>
          </button>
        </div>
        </div>
      </div>
  );
  }
};

export default ProductCard;