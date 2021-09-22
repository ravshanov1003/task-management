const { Router } = require('express')

const { createTask, getTasks } = require('../controllers/task.controller')

const router = Router()

router.post('/create', createTask)
router.get('/', getTasks)

module.exports = { taskRouter: router }