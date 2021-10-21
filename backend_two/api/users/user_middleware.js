const User = require("../users/user_model");

function checkUserId(req, res, next) {
  const id = req.params.id;

  User.findById(id).then((user) => {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ message: "user not found" });
    }
  });
}

module.exports = {
  checkUserId,
};
