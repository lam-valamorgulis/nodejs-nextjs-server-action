const { db } = require("../services/sqldb");

async function getAlltodos() {
  const news = db.prepare("SELECT * FROM news").all();
  return news;
}
async function deleteTodo(id) {
  const deleteStatement = db.prepare("DELETE FROM news WHERE id = ?");
  deleteStatement.run(id);
}

async function addTodo(todo) {
  const insert = db.prepare(
    "INSERT INTO news (content, date, isDone) VALUES (?,?,?)"
  );
  insert.run(todo.content, todo.date, todo.isDone);
}

async function updateTodo(id, todo) {
  const updateStatement = db.prepare(
    "UPDATE news SET content =?, date =?, isDone =? WHERE id =?"
  );
  updateStatement.run(todo.content, todo.date, todo.isDone, id);
}

module.exports = { getAlltodos, deleteTodo, addTodo, updateTodo };
