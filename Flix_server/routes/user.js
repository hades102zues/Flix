const express = require("express");
const router = express.Router();

const profileControllers = require("../controllers/profile");

router.post("/profile", profileControllers.postProfile);

module.exports = router;
