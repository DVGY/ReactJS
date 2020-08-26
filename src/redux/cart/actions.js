import cartAction from './types';

export const toggleCartHidden = () => ({
  type: cartAction.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartAction.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartAction.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartAction.CLEAR_ITEM_FROM_CHECKOUT,
  payload: item,
});
