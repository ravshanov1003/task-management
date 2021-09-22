const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: 'OPEN'
    }
})

module.exports = { taskModel: model('Task', schema) }