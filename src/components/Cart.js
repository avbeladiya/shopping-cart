import React, { Component } from "react";


const styleCart = {
  border: '2px solid black',
  padding: '5px',
  margin: '2px 30px'
}

const styleTitle = {
  fontSize: '14px',
  fontWeight: '900',
}

const styleQuantity = {
  fontSize: '14px',
  fontWeight: '500',
  fontStyle: 'italic'
}

const stylePrice = {
  fontSize: '14px',
  fontWeight: '700',
  fontStyle: 'italic'
}

class Cart extends Component {
  render() {
    return (
      <div style={styleCart}>
        <h4 style={styleTitle}>{this.props.title}</h4>
        <h4 style={styleQuantity}>Quantity: {this.props.quantity}</h4>
        <h4 style={stylePrice}>Total Price: {(this.props.quantity * this.props.price).toFixed(2)}</h4>
      </div>
    );
  }
}

export default Cart;
