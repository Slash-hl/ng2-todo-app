import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';

import { SharedModule } from 'app/shared';
import { todoReducer } from './todo-reducer';
import { TodoService } from './todo.service';
import { TodoActions } from './todo-actions';
import { TodoEffects } from './todo-effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    MaterialModule,
    EffectsModule.runAfterBootstrap(TodoEffects),
    StoreModule.provideStore({
      todos: todoReducer
    }),
    AppRoutingModule
  ],
  providers: [
    TodoService,
    TodoActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
