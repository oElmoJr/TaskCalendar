const express = require("express");
const routes = express.Router();

const TaskController = require("./controllers/TaskController");
const TaskMiddlewares = require("./middlewares/TaskMiddlewares");

routes.get("/tasks", TaskController.index)
routes.post("/tasks", TaskController.store)
routes.put("/tasks/:id", TaskMiddlewares.validateId, TaskController.update)
routes.delete("/tasks/:id", TaskMiddlewares.validateId, TaskController.delete)

module.exports = routes;