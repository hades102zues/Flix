const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = require("../utilities/secret");
//const SECRET = "Kil3rQue3nbiT5D4Dust";
const User = require("../models/user");
const Cart = require("../models/cart");

exports.postSignup = (req, res, next) => {
	const validationErrors = validationResult(req).array();

	//check to ensure user details are valid
	if (!validationResult(req).isEmpty()) {
		const validationMessages = validationErrors.map(
			validate => validate.msg
		);
		return res.status(500).json({
			message: validationMessages
		});
	}

	const emailInLowerCase = req.body.email.toLowerCase();

	//Process to add user to db
	User.find({ email: emailInLowerCase }, (err, result) => {
		//check for existing user
		if (result.length) {
			return res.status(500).json({
				message: ["User with that email already exists!"]
			});
		}

		//go ahead with adding user
		bcrypt
			.hash(req.body.password, 10)
			.then(hash => {
				//create the user document
				const user = User({
					name: req.body.name,
					email: emailInLowerCase,
					password: hash,
					wallet: 50
				});

				user.save(() => {
					//Now create the user's Cart
					const cart = Cart({
						email: emailInLowerCase,
						cart: []
					});

					cart.save(() => {
						//send jwt
						jwt.sign(
							{ email: emailInLowerCase },
							SECRET,
							(err, token) => {
								return res
									.status(201)
									.json({ message: ["User created"], token });
							}
						);
					});
				});
			})
			.catch(err => next(err));
	});
};

exports.postLogin = (req, res, next) => {
	const emailInLowerCase = req.body.email.toLowerCase();

	//check for existence of user
	User.find({ email: emailInLowerCase }, (err, result) => {
		//no user found
		if (!result.length) {
			return res
				.status(500)
				.json({ message: ["Incorrect email or password entered"] });
		}

		//user exists now compare password against hash
		bcrypt
			.compare(req.body.password, result[0].password)
			.then(match => {
				if (match) {
					//create jwt
					jwt.sign(
						{ email: emailInLowerCase },
						SECRET,
						(err, token) => {
							return res
								.status(200)
								.json({ message: ["Logged In"], token });
						}
					);
				} else {
					return res.status(500).json({
						message: ["Incorrect email or password entered"]
					});
				}
			})
			.catch(() => console("Error at comparing hash"));
	});
};
