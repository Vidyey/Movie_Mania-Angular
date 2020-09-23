import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;
  msg:String
  submitted: boolean = false;
  securityQuestion=[
    "Your High School Best Friend? ",
     "Who was your childhood hero? ",
   "Your first vehicle number? ",
     "Your pet name? ",
     "Your Favourite City? "
   ]
  constructor(private formBuilder: FormBuilder, private service: MovieService, private router: Router) { }

  ngOnInit(){

    

    this.forgotPassForm = this.formBuilder.group({
      role:['',Validators.required],
      username: ['', Validators.required],
      securityQuestion: ['', Validators.required],
      securityAnswer: ['', Validators.required]
    });
}
verifyQuestion() {
  this.submitted = true;
  if (this.forgotPassForm.invalid) {
    return;
  }
  let uname = this.forgotPassForm.controls.username.value;
  let securityQue = this.forgotPassForm.controls.securityQuestion.value;
  let ans = this.forgotPassForm.controls.securityAnswer.value;
  let role = this.forgotPassForm.controls.role.value;
   
  if(role=="Customer"){
  this.service.forgotPassword(uname,securityQue,ans).subscribe(data => {
    
    // if(data=="invalid"){
    //   alert("Incorrect Security Question or Answer")
    // }
    // else{
    //   alert("Your temporary  password is  " + data +" Please login through this password and change it for security purpose");
    //   this.router.navigate(['/user/login']);
    // }

    alert(data);
  
  },err => {
  console.log(err.error);
  alert("The username doesn't Exist");
  
});
  
}
else{
  this.service.forgotPasswordAdmin(uname,securityQue,ans).subscribe(data => {
    
    // if(data=="invalid"){
    //   alert("Incorrect Security Question or Answer")
    // }
    // else{
    //   alert("Your temporary  password is  " + data +" Please login through this password and change it for security purpose");
    //   this.router.navigate(['/user/login']);
    // }

    alert(data);
  
  },err => {
  console.log(err.error);
  alert("The username doesn't Exist");
  
});
}
}


}
