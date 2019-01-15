const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postSignup = (req, res, next) => {
	const validationErrors = validationResult(req).array();

	if (validationResult(req).isEmpty()) {
		const validationMessages = validationErrors.map(
			validate => validate.msg
		);
		return res.status(500).json({
			message: validationMessages
		});
	}

	//add user to db
	bcrypt
		.hash(req.body.password, 10)
		.then(hash => {
			const user = User({
				name: req.body.name,
				email: req.body.email,
				password: hash
			});
			user.save(() => res.status(201).json({ message: "User created" }));
		})
		.catch(err => next(err));
	//fist check for existence
	//no exist then encrypt password
	//create user and add to db
};

exports.postLogin = (req, res, next) => {
	res.send("hi");
};
