import { Component } from '@angular/core';

export interface TestInterface {
  id: number,
  name: string,
  complete: boolean,
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date = new Date;
  fword = 'Father word'
  show = false;


  public testBox: TestInterface[] = [
    {id: 1, name: 'Bavr', complete:false, date: new Date()},
    {id: 2, name: 'Antony', complete:true, date: new Date()},
    {id: 3, name: 'Leto', complete:false, date: new Date()},
  ]

  toggleShow(){
    this.show = !this.show
  }

  // onToggle(id: number){
  //   console.log("Changes in element with id: ", id);
  //   const idx = this.testBox.findIndex(t => t.id  === id)
  //   this.testBox[idx].complete = !this.testBox[idx].complete
  // }

  // onDelete(id: number){
  //   console.log("Changes in element with id: ", id);
  //   const idx = this.testBox.findIndex(t => t.id  === id)
  //   this.testBox.splice(idx, 1)
  // }
}
