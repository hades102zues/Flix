const User = require("../models/user");

exports.postProfile = (req, res, next) => {
	User.findOne({ email: req.body.email.toLowerCase() }, (err, doc) =>
		res.status(200).json({ data: doc })
	);
};
