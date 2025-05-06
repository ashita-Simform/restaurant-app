const express = require('express');
const {
  getOrders,
  createOrder,
  placeOrder,
  getOrderHistory,
  getUserProfile,
} = require('../controllers/orderController');
const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.post('/place', placeOrder);
router.get('/history/:userId', getOrderHistory);
router.get('/profile/:userId', getUserProfile);

module.exports = router;