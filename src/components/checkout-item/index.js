import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem, removeItem, addCartItem } from '../../redux/cart/cart-actions';
import './styles.scss';

const CheckoutItem = ({ cartItem, onRemoveCartItem, onAddItem, onRemoveItem }) => {
  const { id, name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => onRemoveItem(id)}>&#10094;</div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => onAddItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => onRemoveCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onRemoveCartItem: (id) => dispatch(removeCartItem(id)),
  onAddItem: (item) => dispatch(addCartItem(item)),
  onRemoveItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
