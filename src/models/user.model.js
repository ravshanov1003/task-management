const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = { UserModel: model('user', schema) }