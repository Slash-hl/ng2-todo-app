import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedModule } from 'app/shared';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoService } from './todo.service';
import { TodoActions } from './todo-actions';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    TodoListFooterComponent
  ],
  providers: [
    TodoService,
    TodoActions
  ]
})
export class TodoModule { }
