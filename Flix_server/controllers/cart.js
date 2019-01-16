const Cart = require("../models/cart");

exports.getCart = (req, res, next) => {
	Cart.findOne({ email: req.body.email }, "cart", (err, doc) => {
		res.status(200).json({ cart: doc.cart });
	});
};

exports.postToCart = (req, res, next) => {
	Cart.updateOne(
		{ email: req.body.email },
		{
			$push: {
				cart: {
					movieId: req.body.movieId,
					movieName: req.body.name,
					posterPath: req.body.posterPath,
					price: req.body.price
				}
			}
		},
		(err, doc) => {
			!err
				? res.status(200).json({ message: "Added to cart" })
				: res.status(500).json({ message: "Failed to add to cart" });
		}
	);
};

exports.deleteFromCart = (req, res, next) => {
	Cart.updateOne(
		{ email: req.body.email },
		{ $pull: { cart: { movieId: req.body.movieId } } },
		(err, doc) => {
			!err
				? res.status(200).json({ message: "Deleted from cart" })
				: res
						.status(500)
						.json({ message: "Failed to delete from cart" });
		}
	);
};
