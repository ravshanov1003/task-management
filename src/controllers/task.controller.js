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

async function getTask(req, res) {
    const { id } = req.params;
    try {
        const task = await taskModel.findOne({ _id: id })
        if (!task) {
            return res.send({
                message: "Task not founded"
            })
        }
        res.send(task)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

async function updateStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
        await taskModel.findOneAndUpdate({ _id: id }, { status })
            // task.status = status
            // await task.save()
        res.send({
            message: "Status has been updated"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

async function deleteTask(req, res) {
    const { id } = req.params
    try {
        await taskModel.findOneAndDelete({ _id: id })
        res.send({
            message: "Task has been deleted successfully"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateStatus,
    deleteTask
}