const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	cart: [
		{
			movieId: {
				type: Number,
				required: true
			},
			movieName: {
				type: "String",
				required: true
			},
			posterPath: {
				type: "String",
				required: true
			},
			price: {
				type: Number,
				required: true
			}
		}
	]
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
