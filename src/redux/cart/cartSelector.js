import { createSelector } from 'reselect';

//input type selector, which does not use createSelector
const selectCart = (state) => state.cart;
//output type selector, which use createSelector

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accQuantity, cartItem) => accQuantity + cartItem.quantity,
      0
    )
);

/** So selectCartItemsCount recieves a state, it references the selectCartItems, selectCartItems References the selectCart => return cart , cart return cartItems, cartItems is used in selectCartItemsCount */

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
