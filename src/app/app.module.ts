import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Todo } from './todo/todo';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    Todo,
    TaskComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
