import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskInfo } from './models/task-info';
import { Status } from './models/task-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';

  @ViewChild('todo')
  private todoList: TaskListComponent;

  @ViewChild('inprogress')
  private inprogressList: TaskListComponent;

  @ViewChild('done')
  private doneList: TaskListComponent;

  @ViewChild('archive')
  private archiveList: TaskListComponent;

  onNewTask(event: TaskInfo): void {
    this.todoList.addTask(event);
  }

  moveFromToDo(event: TaskInfo): void {
    switch (event.status) {
      case Status.InProgress:
        this.inprogressList.addTask(event);
        break;
      case Status.Archive:
        this.archiveList.addTask(event);
        break;
    }
  }

  moveFromInprogress(event: TaskInfo): void {
    this.doneList.addTask(event);
  }

  moveFromDone(event: TaskInfo): void {
    this.archiveList.addTask(event);
  }
}
