const orders = require('../data/orders.json');
const fs = require('fs');
const path = require('path');
const users = require('../data/users.json');

exports.getOrders = (req, res) => {
  res.json(orders);
};

exports.createOrder = (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);

  fs.writeFileSync(
    path.join(__dirname, '../data/orders.json'),
    JSON.stringify(orders, null, 2)
  );

  res.status(201).json(newOrder);
};

exports.placeOrder = (req, res) => {
  const { userId, cart } = req.body;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(401).json({ success: false, message: 'User not logged in' });
  }

  const newOrder = {
    id: `order_${Date.now()}`,
    userId,
    cart,
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);
  fs.writeFileSync(
    path.join(__dirname, '../data/orders.json'),
    JSON.stringify(orders, null, 2)
  );

  res.status(201).json({ success: true, message: 'Order placed successfully', order: newOrder });
};

exports.getOrderHistory = (req, res) => {
  const { userId } = req.params;
  const userOrders = orders.filter((order) => order.userId === userId);

  if (!userOrders.length) {
    return res.status(404).json({ success: false, message: 'No orders found for this user' });
  }

  res.status(200).json({ success: true, orders: userOrders });
};

exports.getUserProfile = (req, res) => {
  const { userId } = req.params;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  res.status(200).json({ success: true, user });
};