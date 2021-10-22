const express = require("express");
const router = express.Router();
const Class = require("./model");

const { validateClassId } = require("./classes_middleware");

router.get("/", async (req, res, next) => {
  try {
    const classes = await Class.getClasses();
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateClassId, async (req, res, next) =>{
  res.json(req.oldClass)
});

module.exports = router;
