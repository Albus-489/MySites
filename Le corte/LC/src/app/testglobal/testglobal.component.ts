import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { delay } from 'rxjs';
import { TestInterface } from '../app.component';
import { TestboxService } from '../testbox.service';

@Component({
  selector: 'app-testglobal',
  templateUrl: './testglobal.component.html',
  styleUrls: ['./testglobal.component.scss']
})
export class TestglobalComponent implements OnInit {

  @Input() testBox: TestInterface[] = [];
  @Output() onToggle = new EventEmitter<number>()
  @Output() onDelete = new EventEmitter<number>()

  constructor(public testboxService: TestboxService) { }

  public loading:boolean = true;
  ngOnInit(): void {
    this.testboxService.fetchHttp()
    .pipe(delay(2000))
    .subscribe(()=>{
      this.loading = false
    })
  }

  completeUnit(id:number){
    //this.onToggle.emit(id)
    this.testboxService.onToggle(id)
  }

  deleteUnit(id: number){
    //this.onDelete.emit(id);
    this.testboxService.onDelete(id)
  }
}
