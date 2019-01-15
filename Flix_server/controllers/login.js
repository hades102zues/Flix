const { validationResult } = require("express-validator/check");

exports.postSignup = (req, res, next) => {
	const validationErrors = validationResult(req).array();

	if (validationErrors.length) {
		const validationMessages = validationErrors.map(
			validate => validate.msg
		);
		return res.status(500).json({
			message: validationMessages
		});
	}
};

exports.postLogin = (req, res, next) => {
	res.send("hi");
};
