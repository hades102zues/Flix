const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	wallet: {
		type: Number,
		required: true
	},
	purchaseHistory: [
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

const User = mongoose.model("User", userSchema);

module.exports = User;
