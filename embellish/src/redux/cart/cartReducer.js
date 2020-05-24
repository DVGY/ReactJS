import cartAction from './types';
import { addItemsToCart, removeItemFromCheckout } from './cartUtility';
const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartAction.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartAction.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case cartAction.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCheckout(state.cartItems, action.payload),
      };
    case cartAction.CLEAR_ITEM_FROM_CHECKOUT:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
