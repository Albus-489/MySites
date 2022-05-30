import { Injectable } from '@angular/core'; // for all services
import {HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

export interface TestInterface {
  id: number,
  title: string,
  completed: boolean,
  date?: any
}

@Injectable({
  providedIn: 'root'
})
export class TestboxService {

  constructor(private http: HttpClient) { }

  public testBox: TestInterface[] = []

  fetchHttp(): Observable<TestInterface[]>{
    return this.http.get<TestInterface[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .pipe(tap( todos => this.testBox = todos)) // save data
  }

  onToggle(id: number){
    console.log("Changes in element with id: ", id);
    const idx = this.testBox.findIndex(t => t.id  === id)
    this.testBox[idx].completed = !this.testBox[idx].completed
  }

  onDelete(id: number){
    console.log("Changes in element with id: ", id);
    const idx = this.testBox.findIndex(t => t.id  === id)
    this.testBox.splice(idx, 1)
  }
}
