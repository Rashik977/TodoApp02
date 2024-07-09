import { TASK_STATUS } from "../constants/TaskStatus";

export interface Task {
  id: number;
  title: string;
  status: TASK_STATUS;
}
