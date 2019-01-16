const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const loginRoutes = require("./routes/login.js");
const cartRoutes = require("./routes/cart.js");

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
	next();
});

app.use(loginRoutes);
app.use(cartRoutes);

app.use((error, req, res, next) => {
	console.log("Error Caught!");
	const errorCode = error.code ? error.code : 501;
	const errorMessage = error.message ? error.message : "Internal error.";

	res.status(errorCode).json({
		message: errorMessage
	});
});

app.use((req, res) => {
	res.status(404).json({ message: "Unknown Route" });
});

mongoose
	.connect(
		"mongodb+srv://hades102zues:2283450@flix-rtvo2.gcp.mongodb.net/Flix?retryWrites=true",
		{ useNewUrlParser: true }
	)
	.then(result => app.listen(3000))
	.catch(() => console.log("Error Connecting to Database"));
