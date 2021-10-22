const Classes = require('../classes/model')

function validateClassId (req, res, next) {
    const id = req.params.id

    Classes.getClassesById(id).then((oldClass) => {
        if (oldClass) {
          req.oldClass = oldClass;
          next();
        } else {
          res.status(404).json({ message: "class not found" });
        }
      });
}


module.exports = {
    validateClassId
}