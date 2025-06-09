const express = require('express')
const { PORT } = require('./config/server.config')

const apiRouter = require('./routes')


const app = express()
const port = PORT

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server started at Port: ${port}`)
})