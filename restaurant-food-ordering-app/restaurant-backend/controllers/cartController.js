const cart = [];
const menu = require('../data/menu.json');

exports.addItemToCart = (req, res) => {
  const { itemId, quantity } = req.body;
  const item = menu.find((menuItem) => menuItem.id === itemId);

  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found' });
  }

  const cartItem = cart.find((cartItem) => cartItem.itemId === itemId);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ itemId, quantity });
  }

  res.status(200).json({ success: true, message: 'Item added to cart', cart });
};

exports.removeItemFromCart = (req, res) => {
  const { itemId } = req.body;
  const index = cart.findIndex((cartItem) => cartItem.itemId === itemId);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Item not found in cart' });
  }

  cart.splice(index, 1);
  res.status(200).json({ success: true, message: 'Item removed from cart', cart });
};

exports.updateItemQuantity = (req, res) => {
  const { itemId, quantity } = req.body;
  const cartItem = cart.find((cartItem) => cartItem.itemId === itemId);

  if (!cartItem) {
    return res.status(404).json({ success: false, message: 'Item not found in cart' });
  }

  cartItem.quantity = quantity;
  res.status(200).json({ success: true, message: 'Item quantity updated', cart });
};

exports.getTotalPrice = (req, res) => {
  const totalPrice = cart.reduce((total, cartItem) => {
    const item = menu.find((menuItem) => menuItem.id === cartItem.itemId);
    return total + item.price * cartItem.quantity;
  }, 0);

  res.status(200).json({ success: true, totalPrice });
};