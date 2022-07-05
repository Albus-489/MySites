import { Component, OnInit } from '@angular/core';
import {default as data} from "../Data/kanji2.json"

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss']
})
export class B1Component implements OnInit {



  constructor() { }

  ngOnInit(): void {
    this.changePage(this.pageNumber) //init first page of kanji
  }

  kanaProps = {
    hiraganaIsOn: true,
    katakanaIsOn: true,
    translateIsOn: true
  }

  // ^ PAGINATOR ^ ******

  changePage(n:number) {

    this.kanjiArr = data.filter((item, index) => {
      return(
        index < n * this.numOfElem && index > (n*this.numOfElem - this.numOfElem) - 1
      )
    })
  }

  prevPage(){
    if(this.pageNumber === 1){
      this.pageNumber = 19
      this.changePage(this.pageNumber)
    }
    else{
      this.pageNumber-=1;
      this.changePage(this.pageNumber)
    }
  }

  nextPage(){
    if(this.pageNumber === 19){
      this.pageNumber = 1
      this.changePage(this.pageNumber)
    }
    else{
      this.pageNumber+=1;
      this.changePage(this.pageNumber)
    }
  }

  kanjiArr:any // data from json (look at imports)
  pageNumber:any = 1;
  numOfElem:number = 40 //number of elements on page

  // ^ PAGINATOR ^ ******


}


