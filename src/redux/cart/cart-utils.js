export const addItemToCart = (cartItems, cartItem) => {
  // find function might be not supported with IE
  const existingCartItem = cartItems.find(item => item.id === cartItem.id);

  if (existingCartItem) {
    return cartItems.map(item => item.id === cartItem.id ? {
      ...item,
      quantity: item.quantity + 1,
    } : item);
  }

  return [
    ...cartItems, {
      ...cartItem,
      quantity: 1,
    }
  ];
};

export const removeItemFromCart = (cartItems, id) => {
  // find function might be not supported with IE
  const existingCartItem = cartItems.find(item => item.id === id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== id);
  }

  return cartItems.map(item => ({
    ...item,
    quantity: item.id === id ? item.quantity - 1 : item.quantity,
  }));
};

