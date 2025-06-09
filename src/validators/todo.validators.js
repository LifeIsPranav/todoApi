function createTodoValidator(req, res, next) {
  if(!req.body.todoText) return res.json({msg: 'Invalid Rquest'})
  next()
}

module.exports = {
  createTodoValidator
}