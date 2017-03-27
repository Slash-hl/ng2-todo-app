import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [

  ]
})
export class AppComponent {
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
