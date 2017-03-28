import { Component } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor(public todoService: TodoService) {
  }

  onAddTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  onUpdateTodo(todo: Todo, changes: any) {
    this.todoService.updateTodo(todo, changes);
  }

  onRemoveTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  // get todos() {
  //   return this.todoService.getAllTodos();
  // }

}
