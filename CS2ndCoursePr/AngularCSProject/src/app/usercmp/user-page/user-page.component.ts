import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  userDetails:any;
  bookList:any;
  ngOnInit() {

    this.service.getAllBooks().subscribe(
      res => {
        this.bookList = res;
      },
      err => {
        console.log("Error in ==> user-page.component.ts getAllBooks() \n", err);
      }
    )
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res;
    //   },
    //   err => {
    //     console.log("Error in ==> user-page.component.ts getUserProfile() \n", err);
    //   },
    // );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/User/LogInPage']);
  }

}
