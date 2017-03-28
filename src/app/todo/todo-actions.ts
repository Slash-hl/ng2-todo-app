import { Action } from '@ngrx/store';
import { Todo } from './todo';


export class TodoActions {
  static CREATE_TODO = 'CREATE_TODO';
  static CREATE_TODO_FAILED = 'CREATE_TODO_FAILED';
  static CREATE_TODO_FULFILLED = 'CREATE_TODO_FULFILLED';

  static DELETE_TODO = 'DELETE_TODO';
  static DELETE_TODO_FAILED = 'DELETE_TODO_FAILED';
  static DELETE_TODO_FULFILLED = 'DELETE_TODO_FULFILLED';

  static FETCH_TODOS = 'FETCH_TODOS';
  static FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';
  static FETCH_TODOS_FULFILLED = 'FETCH_TODOS_FULFILLED';

  static UPDATE_TODO = 'UPDATE_TODO';
  static UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED';
  static UPDATE_TODO_FULFILLED = 'UPDATE_TODO_FULFILLED';

  createTodo(todo: Todo): Action {
    return {
      type: TodoActions.CREATE_TODO,
      payload: {
        todo
      }
    };
  }

  createTodoFailed(error: any): Action {
    return {
      type: TodoActions.CREATE_TODO_FAILED,
      payload: error
    };
  }

  createTodoFulfilled(todo: Todo): Action {
    return {
      type: TodoActions.CREATE_TODO_FULFILLED,
      payload: {
        todo
      }
    };
  }

  deleteTodo(todoId: number): Action {
    return {
      type: TodoActions.DELETE_TODO,
      payload: {
        todoId
      }
    };
  }

  deleteTodoFailed(error: any): Action {
    return {
      type: TodoActions.DELETE_TODO_FAILED,
      payload: error
    };
  }

  deleteTodoFulfilled(todo: Todo): Action {
    return {
      type: TodoActions.DELETE_TODO_FULFILLED,
      payload: {
        todo
      }
    };
  }

  fetchTodos(): Action {
    return {
      type: TodoActions.FETCH_TODOS
    };
  }

  fetchTodosFailed(error: any): Action {
    return {
      type: TodoActions.FETCH_TODOS_FAILED,
      payload: error
    };
  }

  fetchTodosFulfilled(todos: Todo[]): Action {
    return {
      type: TodoActions.FETCH_TODOS_FULFILLED,
      payload: {
        todos
      }
    };
  }

  updateTodo(todoId: number, changes: any): Action {
    return {
      type: TodoActions.UPDATE_TODO,
      payload: {
        changes,
        todoId
      }
    };
  }

  updateTodoFailed(error: any): Action {
    return {
      type: TodoActions.UPDATE_TODO_FAILED,
      payload: error
    };
  }

  updateTodoFulfilled(todo: Todo): Action {
    return {
      type: TodoActions.UPDATE_TODO_FULFILLED,
      payload: {
        todo
      }
    };
  }
}
