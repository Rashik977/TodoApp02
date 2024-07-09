import { NextFunction, Request, Response } from "express";
import * as TaskService from "../service/task";

// Get all tasks
export function getTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const tasks = res.json(TaskService.getTasks());
    return tasks;
  } catch (e) {
    next(e);
  }
}

// Get task by id
export function getTaskById(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  try {
    const message = TaskService.getTaskById(parseInt(id));

    return res.json(message);
  } catch (e) {
    next(e);
  }
}

// Create a new task
export function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const message = TaskService.createTask(req.body);
    return res.json(message);
  } catch (e) {
    next(e);
  }
}

// Update a task
export function updateTask(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id);

  try {
    const message = TaskService.updateTask(id, req.body);
    return res.json(message);
  } catch (e) {
    next(e);
  }
}

// Delete a task
export function deleteTask(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id);
  try {
    const message = TaskService.deleteTask(id);
    return res.json(message);
  } catch (e) {
    next(e);
  }
}
