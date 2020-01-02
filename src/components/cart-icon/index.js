import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './styles.scss';

const CartIcon = ({ onClick, onToggleCartHidden }) => (
  <div className="cart-icon" onClick={onToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">
      0
    </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onToggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
