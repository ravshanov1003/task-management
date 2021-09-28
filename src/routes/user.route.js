const { Router } = require("express")

const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/user.controller')

const router = Router()

router.post("/create", createUser)
router.get("/", getUsers)
router.get('/:id', getUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)

module.exports = { userRouter: router }