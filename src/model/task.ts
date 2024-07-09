import { TASK_STATUS } from "../constants/TaskStatus";
import { Task } from "../interfaces/task";

const tasks: Task[] = [
  {
    id: 1,
    title: "Complete assignment",
    status: TASK_STATUS.NOTSTARTED,
  },
  {
    id: 2,
    title: "Wash the dishes",
    status: TASK_STATUS.PENDING,
  },
  {
    id: 3,
    title: "learn about containers and docker",
    status: TASK_STATUS.PENDING,
  },
  {
    id: 4,
    title: "call mom",
    status: TASK_STATUS.DONE,
  },
];

export default tasks;
