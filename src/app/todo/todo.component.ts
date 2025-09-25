import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  public items: string[] = []; // store tasks
  public newTask: string = ''; // input task

  // Add task
  public addToList() {
    if (this.newTask.trim() !== '') {
      this.items.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  // Delete task by index
  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }
}
