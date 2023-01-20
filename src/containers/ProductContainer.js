import React, { Component } from "react";
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';



class ProductContainer extends Component {
  render() {
    return (
      <div>
        <h3>Products List</h3>
        <ProductList products={this.props.products} />
      </div>
    );
  }
}




const mapStateToProps = ({ productsReducer }) => {
  return {
    products: productsReducer.products
  };
};


export default connect(mapStateToProps)(ProductContainer);
