import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 80;
  const publishKey = 'pk_test_FC13OdfKGB7kEt2TPaNGTcMU006yqyf0CW';
  const onToken = (token) => console.log(token);

  return (
    <StripeCheckout
      label="Pay Now" 
      name="CRWN Clothing ltd." 
      billingAddress 
      shippingAddress 
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`} 
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
