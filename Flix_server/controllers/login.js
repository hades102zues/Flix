const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = "Kil3rQue3nbiT5D4Dust";
const User = require("../models/user");

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

	//Process to add user to db
	User.find({ email: req.body.email }, (err, result) => {
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
				const user = User({
					name: req.body.name,
					email: req.body.email,
					password: hash
				});
				user.save(() =>
					//send jwt
					jwt.sign(
						{ email: req.body.email },
						SECRET,
						(err, token) => {
							return res
								.status(201)
								.json({ message: ["User created"], token });
						}
					)
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
				.json({ message: ["Incorrect email or password entered"] });
		}

		//user exists now compare password against hash
		bcrypt
			.compare(req.body.password, result[0].password)
			.then(match => {
				if (match) {
					//create jwt
					jwt.sign(
						{ email: req.body.email },
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
