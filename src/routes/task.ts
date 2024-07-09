import express from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controller/task";

const tasksRoutes = express.Router();

tasksRoutes.get("/", getTasks);

tasksRoutes.get("/:id", getTaskById);

tasksRoutes.post("/", createTask);

tasksRoutes.put("/:id", updateTask);

tasksRoutes.delete("/:id", deleteTask);

export default tasksRoutes;
