const { Router } = require('express')

const { createTask, getTasks, getTask, updateStatus } = require('../controllers/task.controller')

const router = Router()

router.post('/create', createTask)
router.get('/', getTasks)
router.get('/:id', getTask)
router.patch('/:id/status', updateStatus)

module.exports = { taskRouter: router }