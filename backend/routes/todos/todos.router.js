const express = require("express");

const {
  httpGetAlltodos,
  httpDeleteTodo,
  httpAddTodo,
  httpUpdateTodo,
} = require("./todos.controller");

const todosRouter = express.Router();

todosRouter.get("/", httpGetAlltodos);
todosRouter.delete("/delete/:id", httpDeleteTodo);
todosRouter.post("/add", httpAddTodo);
todosRouter.put("/update/:id", httpUpdateTodo);

module.exports = todosRouter;
