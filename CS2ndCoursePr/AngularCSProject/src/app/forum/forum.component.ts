import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumserviceService } from '../Shared/forumservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(private service: ForumserviceService, private router: Router) { }
  branches:any;
  ngOnInit(): void {
    this.service.getAllBranches().subscribe(res => {
      this.branches = res;
      console.log(this.branches);

    })
  }

  onBackToMyPage(){
    this.router.navigate(['/UserPage']);
  }
  onBranchClick(id:any, name:any){
    localStorage.setItem('branchID', id);
    localStorage.setItem('branchName', name);
    this.router.navigate(['/BranchPage']);
  }
}
