import React from 'react';
import { PropTypes } from 'prop-types';
import './product.css';

const Product = ({
  name = '',
  price = 0.0,
  quantity = 0,
  addOne = undefined,
}) => (
  <div className="product">
    <h6>{name}</h6>
    <h6>Q.{price}</h6>
    <h6>{quantity}</h6>
    <button type="button" onClick={addOne}>Add</button>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
};

export default Product;
