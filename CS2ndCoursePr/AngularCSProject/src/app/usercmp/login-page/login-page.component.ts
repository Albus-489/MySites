import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formModel = {
    userName: '',
    password: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  readData:any;
  userCount:number;
  ngOnInit(): void {
    this.service.getAllUserNames().subscribe((res) => {
      this.readData = res;
      this.userCount = this.readData.length;
      console.log("All users from db ==> in app-login-page/onInit()", this.readData.map((item, index) => {
        return(
          {'user':index, 'name':item.UserName}
        )
      }));
    });

    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('UserPage');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        if(res.Message != null){
          console.log("Response on login page ==>", res);
          this.toastr.error( res.Message, 'ERROR');
        }
        else{
          localStorage.setItem('token', res.Token);
          localStorage.setItem('uname', this.formModel.userName);
          this.router.navigateByUrl('UserPage');
        }
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}
