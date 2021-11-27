import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  addApi(): string {

   // let firebase = this.fdb + ".json"

    return this.todoApi //firebase
  }

  updteApi(id:string): string {

   //let firebase = this.fdb+ id + ".json"
   let server = this.todoApi + id
    return server // firebase
  }
  deleteApi(id:string): string {
   
    return this.todoApi+id// this.fdb+ id + ".json"
  }


 // fdb = "https://bodrul-amin-default-rtdb.asia-southeast1.firebasedatabase.app/todos/"
  //todoApi = "https://bodrul-amin-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
  todoApi = "http://localhost:3000/todos/"
  constructor(private http: HttpClient) {

  }


  add(todo: Todo) {

    return this.http.post(this.addApi(), JSON.stringify(todo), { headers: { 'content-Type': 'application/json' } })

  }
 
  edit(todo: Todo) {
  

    return this.http.put(this.updteApi(todo.id.toString()), JSON.stringify(todo), { headers: { 'content-Type': 'application/json' } })
  }


  delete(todo: Todo) {
    console.log(todo.id);
    console.log(this.todoApi + todo.id);

    return this.http.delete(this.todoApi + todo.id)
  }
  getTodos() {
    return this.http.get(this.todoApi)
  }
}
