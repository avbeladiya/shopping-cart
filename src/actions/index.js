// Put actions here



// ADD TO CART ACTION
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});


// REMOVE FROM PRODUCTLIST
export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id
});
