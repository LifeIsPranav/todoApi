class TodoService {

  constructor (TodoRepository) {
    this.TodoRepository = TodoRepository
  }

  create(todoText) {
    if(todoText.length == 0) return;
    todoText = todoText.trim().toUpperCase()
    this.TodoRepository.insert(todoText)
  }

  getOneTodo(id) {
    return this.TodoRepository.get(id)
  }

  getAllTodos() {
    return this.TodoRepository.getAll()
  }

}



module.exports = TodoService