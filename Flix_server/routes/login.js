const express = require("express");
const router = express.Router();
const loginControllers = require("../controllers/login");
const auth = require("../utilities/tokenVerifier");

const { body } = require("express-validator/check");

router.post(
	"/signup",
	[
		body("email")
			.isEmail()
			.withMessage("Please enter a valid email address!"),
		body("password")
			.isLength({ min: 5 })
			.withMessage(
				"Please enter a password that is atleast 5 characters long"
			),
		body("confirmPassword").custom((value, { req }) => {
			if (value !== req.body.password)
				throw new Error(
					"Check your Passwords. Both Passwords entered must Match!"
				);
		})
	],
	loginControllers.postSignup
);

router.post("/login", loginControllers.postLogin);

module.exports = router;
