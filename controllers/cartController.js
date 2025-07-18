const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @desc    Add product to cart
// @route   POST /api/cart
// @access  Private (JWT)
exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(201).json({ message: "Product added to cart", cart });
  } catch (err) {
    next(err);
  }
};

// @desc    Update product quantity in cart
// @route   PUT /api/cart/:productId
// @access  Private
exports.updateCartItem = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const userId = req.user.id;
    const productId = req.params.productId;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const item = cart.items.find(item => item.productId.toString() === productId);
    if (!item) {
      return res.status(404).json({ error: "Product not in cart" });
    }

    item.quantity = quantity;
    await cart.save();
    res.status(200).json({ message: "Cart updated", cart });
  } catch (err) {
    next(err);
  }
};

// @desc    Remove product from cart
// @route   DELETE /api/cart/:productId
// @access  Private
exports.deleteCartItem = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const newItems = cart.items.filter(item => item.productId.toString() !== productId);
    cart.items = newItems;

    await cart.save();
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (err) {
    next(err);
  }
};
