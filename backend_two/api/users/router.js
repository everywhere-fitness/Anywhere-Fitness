const express = require("express");
const router = express.Router();
const User = require("./user_model");

const { validateUser, validateUserId } = require("./user_middleware");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.getUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateUserId, (req, res, next) => {
  res.json(req.user);
});

router.post("/", validateUser, async (req, res) => {
  try {
    const newUser = await req.body;
    if (newUser) {
      User.createNew(newUser);
      res.status(201).json(newUser);
    } else {
      res.status(400).json({ message: "Missing piece of info" });
    }
  } catch (err) {
    res.status(500).json({
      message: "There was an error while saving the new user",
    });
  }
});

router.delete("/:id", validateUserId, async (req, res, next) => {
  try {
    await User.remove(req.params.id);
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
