import React, { Component } from "react";
import { connect } from 'react-redux';
import Cart from '../components/Cart';

class CartContainer extends Component {
  render() {
    return (
      <div>
        <h3>Your Cart</h3>
        {[...new Set(this.props.cartProducts)].map((cartProduct, key) =>
          (this.props.listOfIds.filter((id) => id === cartProduct.id).length > 0) ?

            <Cart key={key} title={cartProduct.title} price={cartProduct.price} quantity={this.props.listOfIds.filter((id) => id === cartProduct.id).length} />
            : null

        )}
      </div>
    );
  }
}


const mapStateToProps = ({ cartReducer }) => {
  return {
    cartProducts: cartReducer.cartProducts,
    listOfIds: cartReducer.listOfIds
  };
};


export default connect(mapStateToProps)(CartContainer);
