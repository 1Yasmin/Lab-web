import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './newproduct.css';

const mapDispatchToProps = dispatch => ({
  nameHandler: (name) => {
    dispatch(actions.changeName(name));
  },
  priceHandler: (price) => {
    dispatch(actions.changePrice(price));
  },
  quantityHandler: (quantity) => {
    dispatch(actions.changeQuantity(quantity));
  },
  addProduct: () => {
    dispatch(actions.addNewProduct());
  },
});

const NewProduct = ({
  nameHandler,
  priceHandler,
  quantityHandler,
  addProduct,
}) => (
  <div className="new-product">
    <label htmlFor="name">
      Nombre:
      <input
        id="name"
        onChange={(e) => {
          nameHandler(e.target.value);
        }}
      />
    </label>
    <label htmlFor="price">
      Precio:
      <input
        id="price"
        onChange={(e) => {
          priceHandler(parseFloat(e.target.value));
        }}
      />
    </label>
    <label htmlFor="quantity">
      Cantidad:
      <input
        id="quantity"
        onChange={(e) => {
          quantityHandler(parseInt(e.target.value, 10));
        }}
      />
    </label>
    <button type="button" onClick={addProduct}>Add Product</button>
  </div>
);

NewProduct.propTypes = {
  nameHandler: PropTypes.func.isRequired,
  priceHandler: PropTypes.func.isRequired,
  quantityHandler: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(NewProduct);
