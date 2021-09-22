const express = require('express')

const { connectDb } = require('./services/db/db')
const { taskRouter } = require('./src/routes/task.route')

const app = express()
require('dotenv').config()

app.use(express.json())
app.use('/api/task', taskRouter)

const PORT = process.env.APP_PORT || 3000
app.listen(PORT, connectDb)