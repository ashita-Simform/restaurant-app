const express = require('express');
const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  getTotalPrice,
} = require('../controllers/cartController');
const router = express.Router();

router.post('/add', addItemToCart);
router.post('/remove', removeItemFromCart);
router.post('/update', updateItemQuantity);
router.get('/total', getTotalPrice);

module.exports = router;