const db = require("../../data/db-config")

async function addUser(newUser){
    const [ id ] = await db("users").insert(newUser)
    return findById(id)
}

function findById(id){
    return db("users").where("user_id", id).first()
}

function findBy(userName){
    return db("users").where("username", userName).first()
}

module.exports = {
    addUser,
    findById,
    findBy
}