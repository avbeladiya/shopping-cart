import React, { Component } from "react";
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((product, key) =>
          <ProductItem key={key} product={product} />
        )}
      </div>
    );
  }
}

export default ProductList;
