import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter(false);

  @Output()
  updateTodo: EventEmitter<any> = new EventEmitter(false);

  constructor() {
  }

  toggleTodoComplete(todo: Todo) {
    this.updateTodo.emit({
      complete: !todo.complete
    });
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}