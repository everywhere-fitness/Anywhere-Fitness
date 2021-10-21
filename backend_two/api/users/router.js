const express = require("express");
const router = express.Router();
const User = require("./user_model");

const { checkUserId } = require("./user_middleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.getUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkUserId, (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
