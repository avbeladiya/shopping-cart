import products from '../api/products.json';

const initialState = {
  products: products
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
