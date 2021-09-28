const { bcrypt } = require('bcryptjs')

const { UserModel } = require('../models/user.model')

async function createUser(req, res) {
    const { fullName, username, password } = req.body
    try {
        const hashedPassword = await bcrypt.hashSync(password, salt, 12)
        const newUser = await UserModel.create({
            fullName,
            username,
            password: hashedPassword
        })
        await newUser.save()
        res.send({
            message: "User has been created"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

async function getUsers(req, res) {
    try {
        const users = await UserModel.find()
        res.send(users)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

async function getUser(req, res) {
    const { id } = req.params
    try {
        const user = await UserModel.findOne({ _id: id })
        if (!user) {
            return res.send({
                message: "User not founded"
            })
        }
        res.send(user)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

async function deleteUser(req, res) {
    const { id } = req.params
    try {
        await UserModel.findOneAndRemove({ _id: id })
        res.send({
            message: "User has been deleted successfully"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

async function updateUser(req, res) {
    const { id } = req.params
    const { fullName, username, password } = req.body
    try {
        await UserModel.findOneAndUpdate({ _id: id }, {
                fullName,
                username,
                password
            })
            // await updatedUser.save()
        res.send({
            message: "User has been updated"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}