const { Router } = require('express')

const {
    createTask,
    getTasks,
    getTask,
    updateStatus,
    deleteTask
} = require('../controllers/task.controller')

const router = Router()

router.post('/create', createTask)
router.get('/', getTasks)
router.get('/:id', getTask)
router.patch('/:id/status', updateStatus)
router.delete("/:id", deleteTask)

module.exports = { taskRouter: router }