const Classes = require("../classes/model");

function validateClassId(req, res, next) {
  const id = req.params.id;

  Classes.getClassesById(id).then((oldClass) => {
    if (oldClass) {
      req.oldClass = oldClass;
      next();
    } else {
      res.status(404).json({ message: "class not found" });
    }
  });
}

function validateClass(req, res, next) {
  const {
    class_name,
    duration_minutes,
    intensity,
    location,
    max_class_size,
    start_time,
    type,
  } = req.body;

  if (
    !class_name ||
    !class_name.trim() ||
    !duration_minutes ||
    !duration_minutes.trim() ||
    !intensity ||
    !intensity.trim() ||
    !location ||
    !location.trim() ||
    !max_class_size ||
    !max_class_size.trim() ||
    !start_time ||
    !start_time.trim() ||
    !type ||
    !type.trim()
  ) {
    res.status(400).json({ message: "missing field" });
  } else {
    next();
  }
}

//test //test again

module.exports = {
  validateClassId,
  validateClass,
};
