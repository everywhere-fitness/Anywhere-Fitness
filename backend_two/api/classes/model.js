const db = require("../../data/db-config");

async function getClasses() {
  const classRows = await db("classes");

  return classRows;
}

async function getClassesById(id) {
  return db('classes').where('class_id', id).first()
}

module.exports = {
  getClasses,
  getClassesById
};