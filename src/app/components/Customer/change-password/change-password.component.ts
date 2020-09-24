import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  
  changePasswordForm : FormGroup;
  submitted : boolean = false;
  errorMessage = '';
  constructor(private formBuilder: FormBuilder,
     private router: Router, private service: MovieService,private location : Location) { }

  ngOnInit() {


    this.changePasswordForm = this.formBuilder.group({
      oldPassword:['',Validators.required],
      newPassword: ['', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      confirmPassword: ['', Validators.required]
    });
    if (localStorage.username == null) {
      this.router.navigate(['/search']);
    }
    
  
  }


  cancel(){
    this.location.back();
  }

  verifyAndChangePassword(){
    this.submitted = true;
    if(this.changePasswordForm.invalid)
    return;
    let oldPassword = this.changePasswordForm.controls.oldPassword.value;
    let newPassword = this.changePasswordForm.controls.newPassword.value;
    let role = localStorage.role;
    if(role=="customer"){
    this.service.changePassword(localStorage.username, oldPassword, newPassword).subscribe(data => {
      // if (data == "ok") {
      //   alert("Password is changed Successfully...");
      //   this.router.navigate(['/editUser']);
      // } else {
      //   alert(data);
      //   this.router.navigateByUrl('/Refresh', { skipLocationChange: true }).then(() => {
      //     this.router.navigate(['/changePass']);
      //   });
      // }
      alert(data);
    }, err => {
      console.log(err.error);
    });
    
  }else{
    this.service.changePasswordAdmin(localStorage.username, oldPassword, newPassword).subscribe(data => {
      // if (data == "ok") {
      //   alert("Password is changed Successfully...");
      //   this.router.navigate(['/editUser']);
      // } else {
      //   alert(data);
      //   this.router.navigateByUrl('/Refresh', { skipLocationChange: true }).then(() => {
      //     this.router.navigate(['/changePass']);
      //   });
      // }
      alert(data);
    }, err => {
      console.log(err.error);
    });
  }

}

}
