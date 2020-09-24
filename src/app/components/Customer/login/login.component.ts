import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  invalidLogin : boolean = false;

  response: any;
  constructor(private formBuilder: FormBuilder, private service: MovieService, private router: Router) {


  }

  ngOnInit() {

   
    
    this.loginForm = this.formBuilder.group({

      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role:['',Validators.required],
    })
    if(localStorage.role == "admin")
    this.router.navigate(['']);
    else if(localStorage.role == "customer")
    this.router.navigate(['/search']);
    

  }


  login() {
    this.submitted = true;
    if (this.loginForm.invalid)
      return;
    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    let role = this.loginForm.controls.role.value;

    if(role=="Customer"){
        this.service.login(username, password).subscribe(data => {
          if (data) {
            localStorage.username = username;
            localStorage.role = "customer";
            location.reload();
          }
          else {
            this.invalidLogin = true;
          }
        },
          err => {
            //on reject or on error
            console.log(err.error);
          });
  }else{
    this.service.loginAdmin(username, password).subscribe(data => {
      if (data) {
        localStorage.username = username;
        localStorage.role = "admin";
      }
      else {
        this.invalidLogin = true;
      }
    },
      err => {
        //on reject or on error
        console.log(err.error);
      });
  }
}
}
