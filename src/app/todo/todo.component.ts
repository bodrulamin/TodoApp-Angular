import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toggleAddClose: boolean = false;
  updating: boolean = false;

  todo: Todo = new Todo()
  todos:Todo[] = []
  constructor(private tservice: TodoService) {



  }

  ngOnInit(): void {
    this.updateTodos()


  }

  btnAdd() {
    this.toggleAddClose = true;
    this.updating = false;
  }

  btnClose() {
    this.toggleAddClose = false;
    this.todo = new Todo();
  }

  saveTodo() {
    console.log('save called');
    this.tservice.add(this.todo).subscribe(data => {

      this.updateTodos();

    });

  }

  delete(todo: Todo) {
    this.tservice.delete(todo).subscribe(data => {
      this.updateTodos();

    })
  }
  edit(todo: Todo) {
    this.updating = true;
    this.toggleAddClose = true;

    this.todo = todo;




  }

  editTodo() {
    this.tservice.edit(this.todo).subscribe(data => {
      this.updateTodos();
    })
  }

  updateTodos() {
     this.tservice.getTodos().subscribe(
       d=>{
         this.todos = []
      let m =  <Map<any, any>>d
      for (const [key, value] of Object.entries(m)) { 
        console.log(key, value);
        this.todos.push(value)
    }

  
       }
       
    )
  }
}
