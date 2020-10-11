import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusChangeEvent } from 'src/app/models/status-change-event';
import { TaskInfo } from 'src/app/models/task-info';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: TaskInfo[] = [];

  @Input() label: string;
  @Output() changeStatusEvent = new EventEmitter<TaskInfo>();

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(event: StatusChangeEvent): void {
    this.tasks = this.tasks.filter(t => t.id !== event.task.id);
    this.changeStatusEvent.emit({...event.task, status: event.newStatus});
  }

  addTask(task: TaskInfo): void {
    this.tasks.push(task);
  }
}
