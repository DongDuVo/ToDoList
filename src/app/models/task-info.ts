import { Status } from './task-status';

export interface TaskInfo {
  title: string;
  desc: string;
  status: Status;
  id: number;
}
