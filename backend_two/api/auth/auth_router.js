const router = require("express").Router()
const Users = require("../users/user_model")
const bcrypt = require("bcryptjs")
const tokenBuilder = require("./token_builder")


router.post("/register", async (req, res, next) => {
    const credentials = req.body
    try{
        const hash = bcrypt.hashSync(credentials.password, 8)
        credentials.password = hash
        let user = await Users.addUser(credentials)
        const token = tokenBuilder(user)
        res.status(201).json({ user, token })
    }
    catch(err){
        next(err)
    }
})

router.post("/login", )