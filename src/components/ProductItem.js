import React, { Component } from "react";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions';


const styleProductItem = {
  border: '2px solid black',
  padding: '5px',
  margin: '5px 30px'
}

const styleTitle = {
  fontSize: '15px',
  fontWeight: '700',
}

const stylePrice = {
  fontSize: '15px',
  fontWeight: '400',
  fontStyle: 'italic'
}

const styleRemaining = {
  fontSize: '13px',
  fontWeight: '500',
}

const styleButton = {
  borderRadius: '10%',
  padding: '6px',
  background: '#000',
  color: '#fff',
  marginTop: '10px',
  marginRight: '5px',
  cursor: 'pointer',
}

const styleButtonDisabled = {
  borderRadius: '10%',
  padding: '6px',
  background: '#000',
  color: '#fff',
  marginTop: '10px',
  marginRight: '5px',
  opacity: '0.35',
  cursor: 'not-allowed',
  pointerEvents: 'none',
}






class ProductItem extends Component {




  addToCart = (product) => {
    this.props.addToCart(product);
  }

  removeFromCart = (id) => {
    this.props.removeFromCart(id);
  }

  render() {
    return (
      <div style={styleProductItem}>
        <h4 style={styleTitle}>{this.props.product.title}</h4>
        <h4 style={stylePrice}>Price: {this.props.product.price}</h4>
        <h4 style={styleRemaining}>Remaining: {this.props.product.remaining - (this.props.listOfIds.filter((id) => id === this.props.product.id).length)} </h4>
        <div>

          <button onClick={() => this.addToCart(this.props.product)}
            style={(this.props.listOfIds.filter((id) => id === this.props.product.id).length === this.props.product.remaining) ? styleButtonDisabled : styleButton}>ADD TO CART</button>


          <button onClick={() => this.props.removeFromCart(this.props.product.id)}
            style={(this.props.listOfIds.filter((id) => id === this.props.product.id).length === 0) ? styleButtonDisabled : styleButton}
          >REMOVE FROM CART</button>

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    listOfIds: cartReducer.listOfIds
  };
};

function mapDispatchToProps(dispatch) {
  return ({
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
