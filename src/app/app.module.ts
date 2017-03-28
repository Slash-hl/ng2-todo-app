import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { todoReducer } from './todo/todo-reducer';
import { TodoEffects } from './todo/todo-effects';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.runAfterBootstrap(TodoEffects),
    StoreModule.provideStore({
      todos: todoReducer
    }),
    AppRoutingModule,
    TodoModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
