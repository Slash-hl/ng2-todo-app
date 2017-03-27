import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from 'app/todo';
import { API_TODOS_URL } from './constants';


@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  createTodo(body: any): Observable<Todo> {
    return this.request({
      body,
      method: RequestMethod.Post,
      url: API_TODOS_URL
    });
  }

  deleteTodo(taskId: string): Observable<Todo> {
    return this.request({
      method: RequestMethod.Delete,
      url: `${API_TODOS_URL}/${taskId}`
    });
  }

  fetchTodos(): Observable<Todo[]> {
    return this.request({
      method: RequestMethod.Get,
      url: API_TODOS_URL
    });
  }

  updateTodo(taskId: string, body: any): Observable<Todo> {
    return this.request({
      body,
      method: RequestMethod.Put,
      url: `${API_TODOS_URL}/${taskId}`
    });
  }

  request(options: any): Observable<any> {
    if (options.body) {
      if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
      }

      options.headers = new Headers({
        'Content-Type': 'application/json'
      });
    }

    return this.http.request(new Request(options))
      .map((res: Response) => res.json());
  }
}
