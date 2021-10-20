const express = require("express");
const router = express.Router();
const User = require("./user_model");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.getUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

//test

module.exports = router;
