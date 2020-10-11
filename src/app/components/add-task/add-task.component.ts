import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, AbstractFormGroupDirective, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskInfo } from 'src/app/models/task-info';
import { Status } from 'src/app/models/task-status';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  label = 'Create a task';
  pattern = /^[\w\d _-]+$/;
  createTaskForm: FormGroup;

  @Output()
  createTaskEvent = new EventEmitter<TaskInfo>();

  constructor(private fb: FormBuilder) {
    this.createTaskForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern(this.pattern)]],
      desc: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  ngOnInit(): void {
  }

  get title(): AbstractControl {
    return this.createTaskForm.get('title');
  }

  get desc(): AbstractControl {
    return this.createTaskForm.get('desc');
  }

  createNewTask(): void {
    const task: TaskInfo = {
      title: this.createTaskForm.get('title').value,
      desc: this.createTaskForm.get('desc').value,
      status: Status.ToDo,
      id: Date.now()
    };
    this.createTaskEvent.emit(task);
  }
}
