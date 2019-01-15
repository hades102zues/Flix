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
	//check for existence of user
	User.find({ email: req.body.email }, (err, result) => {
		//no user found
		if (!result.length) {
			return res
				.status(500)
				.json({ message: "Incorrect email or password entered" });
		}

		//user exists now compare password against hash
		bcrypt
			.compare(req.body.password, result[0].password)
			.then(match => {
				if (match) {
					//create jwt
					res.status(200).json({ message: "Login IN" });
				} else {
					return res.status(500).json({
						message: "Incorrect email or password entered"
					});
				}
			})
			.catch(() => "Error at comparing hash");
	});

	//no password match then give error check either passowrd or email
	//if exist then define a jwt token
};
