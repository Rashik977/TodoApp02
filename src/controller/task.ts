import { Request, Response } from "express";
import * as TaskService from "../service/task";

// Get all tasks
export function getTasks(req: Request, res: Response) {
  return res.json(TaskService.getTasks());
}

// Get task by id
export function getTaskById(req: Request, res: Response) {
  const id = req.params.id;
  const message = TaskService.getTaskById(parseInt(id));

  return res.json(message);
}

// Create a new task
export function createTask(req: Request, res: Response) {
  const message = TaskService.createTask(req.body);
  return res.json(message);
}

// Update a task
export function updateTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const message = TaskService.updateTask(id, req.body);
  return res.json(message);
}

// Delete a task
export function deleteTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const message = TaskService.deleteTask(id);
  return res.json(message);
}
