import cartAction from './types';

export const toggleCartHidden = () => ({
  type: cartAction.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartAction.ADD_ITEM,
  payload: item,
});
