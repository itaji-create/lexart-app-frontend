import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import { requestGet } from '../utils/requests';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
           name: "iPhone 12",
           brand: "Apple",
           model: "12",
           price: 120.00,
           color: "Silver"
        },
        {
           name: "Samsung Galaxy S21",
           brand: "Samsung",
           model: "S21",
           price: 110.00,
           color: "Black"
        },
        {
           name: "OnePlus 9 Pro",
           brand: "OnePlus",
           model: "9 Pro",
           price: 130.00,
           color: "Blue"
        },
        {
           name: "Google Pixel 5",
           brand: "Google",
           model: "Pixel 5",
           price: 90.00,
           color: "Green"
        },
        {
           name: "Huawei P40",
           brand: "Huawei",
           model: "P40",
           price: 95.00,
           color: "White"
        },
        {
           name: "Sony Xperia 1 III",
           brand: "Sony",
           model: "1 III",
           price: 140.00,
           color: "Black"
        },
        {
           name: "Motorola Moto G Power (2021)",
           brand: "Motorola",
           model: "Moto G Power (2021)",
           price: 80.00,
           color: "Gray"
        },
        {
           name: "LG Velvet",
           brand: "LG",
           model: "Velvet",
           price: 105.00,
           color: "Pink"
        },
        {
           name: "Xiaomi Mi 10",
           brand: "Xiaomi",
           model: "Mi 10",
           price: 115.00,
           color: "Blue"
        },
        {
           name: "Nokia 8.3 5G",
           brand: "Nokia",
           model: "8.3 5G",
           price: 100.00,
           color: "Cyan"
        }
     ],
      error: null,
    };
  }

  componentDidMount() {
    // const token = localStorage.getItem('token');
    // const products = requestGet('/api/products', token);
    // this.setState.products = products;
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h2>Products</h2>
        <div className='container'>
          <div className='row flex-wrap'>
            {products && products.map((e) => (
              <ProductCard name={e.name} brand={e.brand} model={e.model} price={e.price} color={e.color} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
