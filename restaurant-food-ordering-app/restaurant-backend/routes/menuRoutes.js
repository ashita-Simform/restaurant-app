const express = require('express');
const {
  getMenu,
  getMenuByCategory,
  getMenuItemDetails,
} = require('../controllers/menuController');
const router = express.Router();

router.get('/', getMenu);
router.get('/category/:category', getMenuByCategory);
router.get('/:itemId', getMenuItemDetails);

module.exports = router;