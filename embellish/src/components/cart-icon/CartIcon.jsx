import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import { toggleCartHidden } from '../../redux/cart/actions';
import './cart-icon.scss';
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
//*********  NOTE: PERFORMACE ISSUE!! HERE  SAVE RERENDER*/
/*This below function is a selector, bcz it pull some value from the state.
  When ever reducer return a new object due to dipatch below will render again, if user sign in and sign out this will do some computation and render cart icon. To fix this issue we can use memoiaztion using reselect library */
/** changing the code to use reselect library  from this to */
// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return {

//     itemCount: cartItems.reduce(
//       (accQuantity, cartItem) => accQuantity + cartItem.quantity,
//       0
//     ),
//   };
// };
/**To this */
const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
