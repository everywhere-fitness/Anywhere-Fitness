const express = require("express");
const router = express.Router();
const Class = require("./model");

const { validateClassId, validateClass } = require("./classes_middleware");

router.get("/", async (req, res, next) => {
  try {
    const classes = await Class.getClasses();
    res.status(200).json(classes);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateClassId, async (req, res, next) => {
  res.json(req.oldClass);
});

router.post("/", validateClass, async (req, res, next) => {
  try{

  }catch (err) {
    res.status(500).json({message: 'There was an error while saving the new user'})
  }
});

module.exports = router;
