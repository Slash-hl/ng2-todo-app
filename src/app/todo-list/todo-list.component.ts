import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input()
  todos: Observable<Todo[]>;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter(false);

  @Output()
  updateTodo: EventEmitter<Todo> = new EventEmitter(false);

  constructor() {
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
