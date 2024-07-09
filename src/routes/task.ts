import express from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controller/task";
import { auth } from "../middlewares/auth";

const tasksRoutes = express.Router();

tasksRoutes.get("/", auth, getTasks);

tasksRoutes.get("/:id", auth, getTaskById);

tasksRoutes.post("/", auth, createTask);

tasksRoutes.put("/:id", auth, updateTask);

tasksRoutes.delete("/:id", auth, deleteTask);

export default tasksRoutes;
