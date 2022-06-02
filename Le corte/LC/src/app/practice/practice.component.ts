import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  constructor() { }
  arr1 = [true, true, true]
  arr2 = [true, false, true]

  res1: any;
  res2: any;

  users = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: true },
    { id: 4, isActive: false }
  ]

  usr = this.users

  ngOnInit(): void {

    this.res1 = this.arr2.reduce((acc, el) => {if (el === false) {acc = '|>> False inside! <<|'}return acc;}, '|>> Nothing <<|')

    console.log(this.usr);

    this.toggleUserActivity(3)
  }

  isFalse: boolean = false;

  toggleUserActivity(id: number){

    this.users.map((item, index) => {
      if(item.id === id)
        item.isActive = !item.isActive
    })
  }
}
