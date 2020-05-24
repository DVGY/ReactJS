import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { toggleCartHidden } from '../../redux/cart/actions';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.scss';

/* *By default when we don't pass anything in place of mapDispatchToProps, it passes dispatch.*/
const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        CHECKOUT
      </Button>
    </div>
  );
};
/**Changing the code from this  */
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

/**To this */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
