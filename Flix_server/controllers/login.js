const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postSignup = (req, res, next) => {
	const validationErrors = validationResult(req).array();

	//check to ensure user details are valid
	if (validationResult(req).isEmpty()) {
		const validationMessages = validationErrors.map(
			validate => validate.msg
		);
		return res.status(500).json({
			message: validationMessages
		});
	}

	//Process to add user to db
	User.find({ email: req.body.email }, (err, result) => {
		//check for existing user
		if (result.length) {
			return res.status(500).json({
				message: "User with that email already exists!"
			});
		}

		//go ahead with adding user
		bcrypt
			.hash(req.body.password, 10)
			.then(hash => {
				const user = User({
					name: req.body.name,
					email: req.body.email,
					password: hash
				});
				user.save(() =>
					res.status(201).json({ message: "User created" })
				);
			})
			.catch(err => next(err));
	});
};

exports.postLogin = (req, res, next) => {
	res.send("hi");
};
