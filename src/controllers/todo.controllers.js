const TodoRepository = require('../repositories/todo.repository')
const TodoService = require('../services/todo.service')

const todoService = new TodoService(new TodoRepository)


function getTodos(req, res) {

  const response = todoService.getAllTodos()
  res.json({
    data: response
  })
}

function createTodo(req, res) {

  const todoText = req.body.todoText
  todoService.create(todoText)

  return res.json({
    msg: "Created New Todo!"
  })
}


module.exports = {
  getTodos,
  createTodo
}