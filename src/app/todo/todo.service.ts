import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';
import { TodoActions } from './todo-actions';


@Injectable()
export class TodoService {
  todos$: Observable<Todo[]>;

  constructor(private actions: TodoActions, private store: Store<any>) {
    this.todos$ = store.select('todos') as Observable<Todo[]>;
    store.dispatch(this.actions.fetchTodos());
  }

  getAllTodos() {
    return this.todos$;
  }

  addTodo(todo: Todo): void {
    this.store.dispatch(
      this.actions.createTodo(todo)
    );
  }

  deleteTodo(todo: Todo): void {
    this.store.dispatch(
      this.actions.deleteTodo(todo.id)
    );
  }

  updateTodo(todo: Todo, changes: any): void {
    this.store.dispatch(
      this.actions.updateTodo(todo.id, changes)
    );
  }
}
