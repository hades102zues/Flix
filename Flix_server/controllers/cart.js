const Cart = require("../models/cart");
const User = require("../models/user");

exports.postCart = (req, res, next) => {
	Cart.findOne(
		{ email: req.body.email.toLowerCase() },
		"cart",
		(err, doc) => {
			if (doc.cart.length)
				return res.status(200).json({ cart: doc.cart });

			res.status(200).json({ cart: [] });
		}
	);
};

exports.postToCart = (req, res, next) => {
	Cart.updateOne(
		{ email: req.body.email.toLowerCase() },
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
		{ email: req.body.email.toLowerCase() },
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

exports.postPreCheckout = (req, res, next) => {
	//get the contents of the user's cart
	Cart.findOne({ email: req.body.email.toLowerCase() }, (err, cartDoc) => {
		const cart = cartDoc.cart;

		//get the user's wallet
		User.findOne(
			{ email: req.body.email.toLowerCase() },
			(err, userDoc) => {
				const wallet = userDoc.wallet;

				let totalPrice = 0.0;

				for (let item of cart) totalPrice += item.price;

				res.status(200).json({
					wallet: wallet,
					cartCost: totalPrice.toFixed(2)
				});
			}
		);
	});
};

exports.postConfirmPurchase = (req, res, next) => {
	//get the contents of the user's cart
	Cart.findOne({ email: req.body.email.toLowerCase() }, (err, cartDoc) => {
		const cart = cartDoc.cart;

		//get the user's wallet
		User.findOne(
			{ email: req.body.email.toLowerCase() },
			(err, userDoc) => {
				const wallet = userDoc.wallet;

				let totalPrice = 0.0;

				for (let item of cart) totalPrice += item.price;

				//continue with purchase
				if (wallet > totalPrice) {
					const updatedWallet = wallet - totalPrice;

					//update users' wallet and purchase history
					User.updateOne(
						{ email: req.body.email.toLowerCase() },
						{
							wallet: updatedWallet.toFixed(2),
							$push: {
								purchaseHistory: [...cart]
							}
						},
						(err, doc) => {
							//now remove all items from user's cart
							Cart.updateOne(
								{ email: req.body.email.toLowerCase() },
								{ cart: [] },

								//send a response
								(err, doc) =>
									res
										.status(200)
										.json({ message: "Purchase Completed" })
							);
						}
					);
				} else {
					res.status(500).json({ message: "Insufficient Funds" });
				}
			}
		);
	});
};
