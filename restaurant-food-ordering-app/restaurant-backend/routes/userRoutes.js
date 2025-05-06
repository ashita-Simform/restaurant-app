const express = require('express');
const { getUsers, checkUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);
router.post('/check', checkUser);

module.exports = router;