import { Component, OnInit } from '@angular/core';
import {default as data} from "../Data/kanji.json"

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss']
})
export class A1Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  kanaProps = {
    hiraganaIsOn: true,
    katakanaIsOn: true,
    translateIsOn: true
  }

  kanjiArr = data // data from json (look at imports)


  testCheck(){
    // this.checkState = !this.checkState
    // alert(this.checkState)
  }

}


