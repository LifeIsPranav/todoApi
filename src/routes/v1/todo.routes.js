const express = require('express')

const { getTodos, createTodo } = require('../../controllers/todo.controllers')
const { createTodoValidator } = require('../../validators/todo.validators')


const todoRouter = express.Router()


todoRouter.get('/', getTodos)
todoRouter.post('/', createTodoValidator, createTodo)


module.exports = todoRouter