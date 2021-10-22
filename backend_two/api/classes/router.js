const express = require("express");
const router = express.Router();
const Class = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const classes = await Class.getClasses();
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
