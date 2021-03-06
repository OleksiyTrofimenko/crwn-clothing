import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../components/checkout-item';
import StripeButton from '../../components/stripe-button';
import './styles.scss';

const CheckoutPage = ({ checkoutItems, checkoutTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      checkoutItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
    }
    <div className="total">
      <span>${checkoutTotal}</span>
    </div>
    <div className="warning">
      <span>4242 4242 4242 4242 Date 01/20 CVV 123</span>
    </div>
    <StripeButton price={checkoutTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  checkoutItems: selectCartItems,
  checkoutTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
