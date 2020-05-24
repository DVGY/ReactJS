import React from 'react';
import Button from '../button/Button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelector';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};
/**Changing the code from this  */
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

/**To this */
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
