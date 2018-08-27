export const changeName = name => ({
  type: 'NEW_NAME',
  name,
});

export const changePrice = price => ({
  type: 'NEW_PRICE',
  price,
});

export const changeQuantity = quantity => ({
  type: 'NEW_QUANTITY',
  quantity,
});

export const addNewProduct = () => ({
  type: 'NEW_PRODUCT_ADDED',
});
