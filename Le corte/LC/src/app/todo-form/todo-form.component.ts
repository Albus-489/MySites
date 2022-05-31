import { Component, OnInit } from '@angular/core';
import { TestboxService, TestInterface } from '../testbox.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(public tSetvice: TestboxService) { }

  title: string = ''


  ngOnInit(): void {
  }

  addTask(){
    const todo: TestInterface = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }

    this.tSetvice.addTask(todo)
  }
}
