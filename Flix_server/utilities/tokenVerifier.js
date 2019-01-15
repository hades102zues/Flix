const jwt = require("jsonwebtoken");
const SECRET = "Kil3rQue3nbiT5D4Dust";

module.exports = (req, res, next) => {
	const token = req
		.get("Authorization")
		.split("=")[1]
		.trim();

	//checks to see if request contains a valid request
	jwt.verify(token, SECRET, (err, decodeResult) => {
		if (!decodeResult)
			return res
				.status(501)
				.json({ message: "Invalid jwt token received" });

		next();
	});
};
