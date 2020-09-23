import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;
  username: string
  usernameErrorMessage: string;
  usernameFlag: boolean = false;
  phoneNo: string;
  phoneNoErrorMessage: string;
  phoneNoFlag: boolean = false;



  securityQuestion=[
    "Your High School Best Friend? ",
     "Who was your childhood hero? ",
   "Your first vehicle number? ",
     "Your pet name? ",
     "Your Favourite City? "
   ]

  constructor(private formBuilder:FormBuilder,private service:MovieService,private router :Router) {

   }

  ngOnInit() {
  
    
    this.addForm = this.formBuilder.group({
      customerName: ['', [Validators.required,this.customPatternValid({
        pattern: /^([^0-9]*)$/, msg: 'Numbers not Allowed..'}),
         Validators.pattern("^[0-9A-Z][0-9a-zA-Z]*(?: [0-9A-Z][0-9a-zA-Z]*){0,2}$")]],
      username: ['', [Validators.required,Validators.email]],
      customerContact: ['', [Validators.required,  Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[a-zA-Z6-9][A-Za-z0-9]*"), this.customPatternValid({
        pattern: /^([^a-b A-z]*)$/, msg: 'only numbers are expected'})]],
      dateOfBirth: ['', [Validators.required]],
      role:['',Validators.required],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      confirmPassword:['',Validators.required],
      securityQuestion:['',Validators.required],
      answer:['',Validators.required]
    })
  }


  public customPatternValid(config: any): ValidatorFn {
    return (control: FormControl) => {
      let regExp: RegExp = config.pattern;
      if (control.value && !control.value.match(regExp)) {
        return {
          invalidMsg: config.msg
        };
      }
      else {
        return null;
      }
    };
  }


  addCustomer()
  {
    this.submitted=true;
    if(this.addForm.invalid)
    return;
    console.log(this.addForm.value);
    
    let role = this.addForm.controls.role.value;
    
    if(role=="Admin"){

   
     
        let admin:Admin={
          "username":this.addForm.controls.username.value,
          "adminName": this.addForm.controls.customerName.value,
          "adminContact":this.addForm.controls.customerContact.value,
          "password":this.addForm.controls.password.value,
          "securityQuestion":this.addForm.controls.securityQuestion.value,
          "answer":this.addForm.controls.answer.value
        }

        this.service.registerNewAdmin(admin).subscribe(data => {
          alert(data);
          this.router.navigate(['/login']);
    
        }, err => {
          console.log(err.error);
    
        })
      }
      
    
    else
    {
    this.service.registerNewUser(this.addForm.value).subscribe(data => {
      alert(data);
      this.router.navigate(['/login']);

    }, err => {
      console.log(err.error);

    })
  }

  }

}
