const defaultState = {
  products: [{
    name: 'Chocolate',
    price: 15.0,
    quantity: 10,
  },
  {
    name: 'Galletas',
    price: 5.25,
    quantity: 8,
  }],
 
};

const newProductReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'NEW_NAME':
    return {
      ...state,
      newName: action.name,
    };
  case 'NEW_PRICE':
    return {
      ...state,
      newPrice: action.price,
    };
  case 'NEW_QUANTITY':
    return {
      ...state,
      newQuantity: action.quantity,
    };
  case 'NEW_PRODUCT_ADDED':
    return {
      ...state,
      products: [
        ...state.products,
        {
          name: state.newName,
          price: state.newPrice,
          quantity: state.newQuantity,
        },
      ],
    };
  default:
    return state;
  }
};

export default newProductReducer;
