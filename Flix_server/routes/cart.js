const express = require("express");

const router = express.Router();
const cartControllers = require("../controllers/cart");

router.post("/cart", cartControllers.postCart);
router.post("/add-to-cart", cartControllers.postToCart);
router.delete("/remove-from-cart", cartControllers.deleteFromCart);
router.post("/confirm-purchase", cartControllers.postConfirmPurchase);

module.exports = router;
