//Grouping same items inside a new key 'quantiy' : value

export const addItemsToCart = (cartItems, ItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === ItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...ItemToAdd, quantity: 1 }];
};
