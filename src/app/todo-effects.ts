import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ApiService } from 'app/shared';
import { TodoActions } from './todo-actions';


@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store$: Store<any>,
    private todoActions: TodoActions
) {}


@Effect()
createTodo$ = this.actions$
  .ofType(TodoActions.CREATE_TODO)
  .switchMap(({payload}) => this.api.createTodo(payload.todo)
    .map(todo => this.todoActions.createTodoFulfilled(todo))
    .catch(error => Observable.of(this.todoActions.createTodoFailed(error)))
  );

@Effect()
deleteTodo$ = this.actions$
  .ofType(TodoActions.DELETE_TODO)
  .switchMap(({payload}) => this.api.deleteTodo(payload.todoId)
    .map(todo => this.todoActions.deleteTodoFulfilled(todo))
    .catch(error => Observable.of(this.todoActions.deleteTodoFailed(error)))
  );

@Effect()
fetchTodos$ = this.actions$
  .ofType(TodoActions.FETCH_TODOS)
  .switchMap(() => this.api.fetchTodos()
    .map(todo => this.todoActions.fetchTodosFulfilled(todo))
    .catch(error => Observable.of(this.todoActions.fetchTodosFailed(error)))
  );

@Effect()
updateTodo$ = this.actions$
  .ofType(TodoActions.UPDATE_TODO)
  .switchMap(({payload}) => this.api.updateTodo(payload.todoId, payload.changes)
    .map(todo => this.todoActions.updateTodoFulfilled(todo))
    .catch(error => Observable.of(this.todoActions.updateTodoFailed(error)))
  );
}
