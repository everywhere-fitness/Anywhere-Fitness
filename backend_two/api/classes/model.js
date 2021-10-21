const db = require("../../data/db-config");

async function getClasses() {
  const classRows = await db("classes");

  return classRows;
}

module.exports = {
  getClasses,
};