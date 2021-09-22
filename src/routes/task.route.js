const { Router } = require('express')

const { createTask } = require('../controllers/task.controller')

const router = Router()

router.post('/create', createTask)

module.exports = { taskRouter: router }