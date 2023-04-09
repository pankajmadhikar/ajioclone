const express = require("express");
const userSignup = require("../controller/user-controller");

const router = express.Router();

router.post("/signup", userSignup);

module.exports = router;
