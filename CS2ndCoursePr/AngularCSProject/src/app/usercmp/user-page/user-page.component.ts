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
  dngr = "danger"

  userModel = {
    'userName': 'loading..',
    'fullName': 'loading..',
    'email': 'loading..'
  }

  ngOnInit() {

    console.log("TOKEN ==> " + localStorage.getItem('token'));
    this.SetUserInfo();
    this.service.getAllBooks().subscribe(
      res => {
        this.bookList = res;
        console.log(this.bookList);
      },
      err => {
        console.log("Error in ==> user-page.component.ts getAllBooks() \n", err);
      }
    )

    // TODO configure authorize method
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res;
    //     console.log(res);

    //   },
    //   err => {
    //     console.log("Error in ==> user-page.component.ts getUserProfile() \n", err);
    //   },
    // );
  }

  ratingSet(r:number): string{
    let d = "danger";
    let s = "success";
    let how = d;

    r > 45 ? how = s : how = d
    return how;
  }

  SetUserInfo(){
    this.service.getAllUserNames().subscribe((res:any) => {
      res.map((item) =>{
        if(item.UserName === localStorage.getItem('uname')){
          this.userModel.userName = item.UserName;
          this.userModel.fullName = item.FirstName + ' ' + item.LastName;
          this.userModel.email = item.Email;
        }
      })
      console.log(this.userModel);
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('uname');
    this.router.navigate(['/User/LogInPage']);
  }
  onForum() {
    this.router.navigate(['/ForumPage']);
  }
}
