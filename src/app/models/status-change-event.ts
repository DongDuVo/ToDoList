import { TaskInfo } from './task-info';
import { Status } from './task-status';

export interface StatusChangeEvent {
  task: TaskInfo;
  newStatus: Status;
}
