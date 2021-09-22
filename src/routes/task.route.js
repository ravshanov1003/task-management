const { Router } = require('express')

const { createTask, getTasks, getTask } = require('../controllers/task.controller')

const router = Router()

router.post('/create', createTask)
router.get('/', getTasks)
router.get('/:id', getTask)

module.exports = { taskRouter: router }