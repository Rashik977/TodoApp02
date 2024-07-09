import { TASK_STATUS } from "../constants/TaskStatus";
import { Task } from "../interfaces/task";
import tasks from "../model/task";

// Get all tasks
export const getTasks = () => {
  return tasks;
};

// Get task from the provided ID
export const getTaskById = (id: number) => {
  const task = tasks.find((task) => task.id === id);

  if (!task) return { error: "Task not found" };

  return task;
};

// create a task
export const createTask = (task: Task) => {
  // Check if title and status are provided
  if (!task.title || !task.status)
    return { error: "Title and status are required" };

  // Check if status is valid from enum
  if (!Object.values(TASK_STATUS).includes(task.status))
    return { error: "Invalid status" };

  tasks.push({
    id: tasks.length + 1,
    title: task.title,
    status: task.status,
  });

  return { message: "Task created" };
};

// function to update a task
export const updateTask = (id: number, task: Task) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // Check if task exists
  if (taskIndex === -1) return { error: "Task not found" };

  // Check if status is valid from enum
  if (task.status && !Object.values(TASK_STATUS).includes(task.status))
    return { message: "Invalid status" };

  // Update tasks array
  tasks[taskIndex] = { ...tasks[taskIndex], ...task };

  return { message: "Task updated" };
};

// function to delete a task
export const deleteTask = (id: number) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // Check if task exists
  if (taskIndex === -1) return { error: "Task not found" };

  // Delete task from tasks array
  tasks.splice(taskIndex, 1);

  return { message: "Task deleted" };
};
