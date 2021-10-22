const User = require("../users/user_model");

function validateUserId(req, res, next) {
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

function validateUser(req, res, next) {
  const { username, first_name, last_name, user_type } = req.body;
  if (
    !username ||
    !username.trim() ||
    !first_name ||
    !first_name.trim() ||
    !last_name ||
    !last_name.trim() ||
    !user_type
  ) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    next();
  }
}

async function checkUserNameUnique(req, res, next) {
  const { name } = req.body;
  const userName = await User.findBy(name);
}

module.exports = {
  validateUserId,
  validateUser
};
