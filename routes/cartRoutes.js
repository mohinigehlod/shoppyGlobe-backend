const express = require('express');
const router = express.Router();
const {
  addToCart,
  updateCartItem,
  deleteCartItem
} = require('../controllers/cartController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, addToCart);
router.put('/:productId', verifyToken, updateCartItem);
router.delete('/:productId', verifyToken, deleteCartItem);

module.exports = router;
