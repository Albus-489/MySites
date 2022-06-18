import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  showToasterSuccess(l:string, r:string){
    this.toastr.success(l, r)
  }

  showToasterWarning(){
    this.toastr.warning("This is warning", "This is warning")
  }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      res => {
        console.log(res);
        this.showToasterSuccess('New user created!', 'Registration successful.')
        this.service.formModel.reset();
      },
      err=> {
        this.toastr.warning(err.error.Message, "This is warning")
      }
    );
  }

}
