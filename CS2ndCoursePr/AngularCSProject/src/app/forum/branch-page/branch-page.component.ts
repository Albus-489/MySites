import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumserviceService } from '../../Shared/forumservice.service'

@Component({
  selector: 'app-branch-page',
  templateUrl: './branch-page.component.html',
  styleUrls: ['./branch-page.component.scss']
})
export class BranchPageComponent implements OnInit {

  constructor(private service: ForumserviceService, private router: Router) { }

  allThemes:any = [];
  curentThemes:any = [];
  branchName:any;
  ngOnInit(): void {
    console.log(localStorage.getItem('branchID'));
    this.branchName = localStorage.getItem('branchName');
    this.service.getAllThemes().subscribe((res:any) => {
      res.map((item) => {
        this.allThemes.push(item);
      })

      this.allThemes.map((item) => {
        if(item.branch == localStorage.getItem('branchID')){
          this.curentThemes.push(item)
        }
      })
    })

  }

  onBackToMyPage(){
    this.router.navigate(['/UserPage']);
  }
  backToBranches(){
    this.router.navigate(['/ForumPage']);
  }
  onThemeClick(id:any){
    alert('Page in developing')
  }

}
