import { Action, ActionReducer } from '@ngrx/store';
import { Todo } from './todo';
import { TodoActions } from './todo-actions';

export function todoReducer(state: Todo[] = [], {payload, type}: Action) : any[] {
  switch (type) {
    case TodoActions.CREATE_TODO_FULFILLED:
      return [ ...state, payload.todo ];

    case TodoActions.DELETE_TODO_FULFILLED:
      return state.filter((todo: Todo) => {
        return todo.id !== payload.todo.id;
      });

    case TodoActions.FETCH_TODOS_FULFILLED:
      return payload.todos || [];

    case TodoActions.UPDATE_TODO_FULFILLED:
      return state.map((todo: Todo) => {
        return todo.id === payload.todo.id ? payload.todo : todo;
      });

    default:
      return state;
  }
};
