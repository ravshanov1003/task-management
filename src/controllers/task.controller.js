const { taskModel } = require('../models/task.model')

async function createTask(req, res) {
    const { title, description, status } = req.body
    try {
        const newTask = new taskModel({
            title,
            description,
            status
        })
        await newTask.save()
        res.send({
            message: 'Task has been created'
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await taskModel.find()
        res.send(tasks)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    createTask,
    getTasks,

}