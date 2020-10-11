import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusChangeEvent } from 'src/app/models/status-change-event';
import { TaskInfo } from 'src/app/models/task-info';
import { Status } from 'src/app/models/task-status';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskInfo;
  status = Status;

  @Output() changeStatusEvent = new EventEmitter<StatusChangeEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(status: Status): void {
    this.changeStatusEvent.emit({ task: this.task, newStatus: status });
  }

}
