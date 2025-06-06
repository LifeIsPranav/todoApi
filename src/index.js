const express = require('express')
const { PORT } = require('./config/server.config')

const appRouter = require('./routes')


const app = express()
const port = PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', appRouter)

app.listen(port, () => {
  console.log(`Server started at Port: ${port}`)
})