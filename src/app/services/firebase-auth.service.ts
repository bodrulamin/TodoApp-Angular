import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  addApi(): string {

    let firebase = this.fdb + ".json"

    return firebase
  }

  updteApi(id: string): string {

    let firebase = this.fdb + id + ".json"

    return firebase
  }
  deleteApi(id: string): string {

    return this.fdb + id + ".json"
  }

  fdb = "https://bodrul-amin-default-rtdb.asia-southeast1.firebasedatabase.app/todos/"
  constructor(private http: HttpClient) {

  }


  add(todo: Todo) {

    return this.http.post(this.addApi(), JSON.stringify(todo), { headers: { 'content-Type': 'application/json' } })

  }

  edit(todo: Todo) {
    return this.http.put(this.updteApi(todo.id.toString()), JSON.stringify(todo), { headers: { 'content-Type': 'application/json' } })
  }


  delete(todo: Todo) {


    return this.http.delete(this.deleteApi(todo.id.toString()))
  }
  getTodos() {
    return this.http.get(this.fdb+".json")
  }

}