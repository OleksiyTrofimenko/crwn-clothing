import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../button';
import CartItem from '../cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {!Boolean(cartItems.length) ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}
    </div>
    <Button onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>
      Go to checkout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
