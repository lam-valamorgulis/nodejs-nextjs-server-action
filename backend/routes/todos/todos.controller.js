const {
  getAlltodos,
  deleteTodo,
  addTodo,
  updateTodo,
} = require("../../models/todos.model");

async function httpGetAlltodos(req, res) {
  return res.status(200).json(await getAlltodos());
}

async function httpDeleteTodo(req, res) {
  const { id } = req.params;
  await deleteTodo(id);
  return res.status(200).json({ message: "Todo deleted" });
}
async function httpAddTodo(req, res) {
  const todo = new Object(req.body);
  if (!todo.content || !todo.date || !todo.isDone) {
    return res.status(400).json({
      message: "Please provide content, date and is done status",
    });
  }
  await addTodo(todo);
  return res.status(200).json({ message: "Todo added" });
}

async function httpUpdateTodo(req, res) {
  const { id } = req.params;
  const todo = new Object(req.body);
  if (!todo.content || !todo.date || !todo.isDone || !id) {
    return res.status(400).json({
      message: "Please provide content, date and is done status",
    });
  }
  await updateTodo(id, todo);
  return res.status(200).json({ message: "Todo updated" });
}

module.exports = {
  httpGetAlltodos,
  httpDeleteTodo,
  httpAddTodo,
  httpUpdateTodo,
};
