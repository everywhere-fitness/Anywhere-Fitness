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

function validateUser(req, res, next) {
  const { username } = req.body;
  if (!username || !username.trim()) {
    res.status(400).json({ message: "missing required name field" });
  } else {
    req.name = name.trim();
    next();
  }
}

async function checkUserNameUnique(req, res, next) {
  const { name } = req.body;
  const userName = await User.findBy(name);
}

module.exports = {
  checkUserId,
  validateUser,
};
