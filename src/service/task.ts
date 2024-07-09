import { TASK_STATUS } from "../constants/TaskStatus";
import { Task } from "../interfaces/task";

import * as TaskModel from "../model/task";
import { CustomError } from "../utils/CustomError";

// Get all tasks
export const getTasks = () => {
  const tasks = TaskModel.getTasks();

  if (!tasks) throw new CustomError("No tasks found", 404);

  return tasks;
};

// Get task from the provided ID
export const getTaskById = (id: number) => {
  const task = TaskModel.findTaskById(id);

  if (!task) throw new CustomError("Task not found", 404);

  return task;
};

// create a task
export const createTask = (task: Task) => {
  // Check if title and status are provided
  if (!task.title || !task.status)
    throw new CustomError("Title and status are required", 400);

  // Check if status is valid from enum
  if (!Object.values(TASK_STATUS).includes(task.status))
    throw new CustomError("Invalid status", 400);

  TaskModel.addTask(task);

  return { message: "Task created" };
};

// function to update a task
export const updateTask = (id: number, task: Task) => {
  const taskIndex = TaskModel.findTaskIndexById(id);

  // Check if task exists
  if (taskIndex === -1) throw new CustomError("Task not found", 404);

  // Check if status is valid from enum
  if (task.status && !Object.values(TASK_STATUS).includes(task.status))
    throw new CustomError("Invalid status", 400);

  TaskModel.updateTask(id, task, taskIndex);

  return { message: "Task updated" };
};

// function to delete a task
export const deleteTask = (id: number) => {
  const taskIndex = TaskModel.findTaskIndexById(id);

  // Check if task exists
  if (taskIndex === -1) throw new CustomError("Task not found", 404);

  // Delete task from tasks array
  TaskModel.deleteTask(taskIndex);

  return { message: "Task deleted" };
};
