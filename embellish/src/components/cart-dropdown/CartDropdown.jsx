import React from 'react';
import Button from '../button/Button';
import './cart-dropdown.scss';
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
