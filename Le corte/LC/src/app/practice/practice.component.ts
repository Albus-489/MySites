import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {

  constructor() {
    console.log(this.word);

   }

  @Input() word = 'Child word cotr'


  users = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: true },
    { id: 4, isActive: false }
  ]

  usr = this.users



  ngOnDestroy(): void {
    this.word = 'Destroyed'
    console.log("Practice ngOnDestroy",this.word);
  }

  ngOnChanges(): void {
    console.log("Practice ngOnChanges",'Changes');
  }

  isFalse: boolean = false;

  toggleUserActivity(id: number){

    this.users.map((item, index) => {
      if(item.id === id)
        item.isActive = !item.isActive
    })
  }

  ngOnInit(): void {
    //console.log("Practice ngOnInit",this.word);
    console.log(this.changeSelect(1)); // * виклик функції *


    /** РЕЗУЛЬТАТ
     * 0: {id: 1, selected: true}
     * 1: {id: 2, selected: false}
     */
  }

  arr = [ // * масив об'єктів *
    {
        id: 1,
        selected: false,
    },
    {
        id: 2,
        selected: false,
    },];

    // ^ Функція ^
  changeSelect(id:number){
    let a =  this.arr.map((item) => {

      if(item.id === id){
          item.selected = !item.selected
      }
      return item;
    })
    return a;
  }
}
