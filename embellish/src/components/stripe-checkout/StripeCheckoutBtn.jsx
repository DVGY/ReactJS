import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_3EiQuwOtve0XiauuIesBPsiN000KwNTvtV';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Embellish Clothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your price is: ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutBtn;
