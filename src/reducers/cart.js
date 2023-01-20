const initialState = {
  cartProducts: [],
  listOfIds: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state, cartProducts: [...state.cartProducts, action.payload],
        listOfIds: [...state.listOfIds, action.payload.id]
      };

    case 'REMOVE_FROM_CART':
      let removeChosenIdArr = state.listOfIds.filter((item) => item === action.payload).slice(0, -1);
      let restOFArr = state.listOfIds.filter((item) => item !== action.payload);
      return { ...state, listOfIds: removeChosenIdArr.concat(restOFArr) };
    default:
      return state;
  }
}
