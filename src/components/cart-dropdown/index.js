import React from 'react';
import Button from '../button';
import './styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button>
      Go to checkout
    </Button>
  </div>
)

export default CartDropdown;
