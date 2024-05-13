const express = require("express");

const todosRouter = require("./todos/todos.router");

const api = express.Router();

api.use("/todos", todosRouter);

module.exports = api;
