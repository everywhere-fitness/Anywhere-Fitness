const db = require("../../data/db-config");

async function addUser(newUser) {
  const [id] = await db("users").insert(newUser);
  return findById(id);
}

async function getUsers() {
  const userRows = await db("users");

  return userRows;
}

function findById(id) {
  return db("users").where("user_id", id).first();
}

function findBy(userName) {
  return db("users").where("username", userName).first();
}

module.exports = {
  getUsers,
  addUser,
  findById,
  findBy,
};