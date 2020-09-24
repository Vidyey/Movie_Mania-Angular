import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editProfileForm: FormGroup;
  submitted: boolean = false;
  isAdmin:boolean=false;
  isCustomer:boolean=false;

  constructor(private formBuilder: FormBuilder, private router: Router,private service:MovieService) { }

  ngOnInit() {
    if (localStorage.username == null) {
      this.router.navigate(['/search']);
    }
    if(localStorage.role=="customer"){

      this.isCustomer=true;
      this.editProfileForm = this.formBuilder.group({
   

        customerName: ['', [Validators.required,this.customPatternValid({
          pattern: /^([^0-9]*)$/, msg: 'Numbers not Allowed..'}),
           Validators.pattern("^[0-9A-Z][0-9a-zA-Z]*(?: [0-9A-Z][0-9a-zA-Z]*){0,2}$")]],
        username: [{ value: '', disabled: true }],
        customerContact: ['', [Validators.required,  Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[a-zA-Z6-9][A-Za-z0-9]*"), this.customPatternValid({
          pattern: /^([^a-b A-z]*)$/, msg: 'only numbers are expected'})]],
        dateOfBirth: ['', [Validators.required]],
        password: [{ value: '', disabled: true }],
        securityQuestion:[{ value: '', disabled: true }],
        answer:[{ value: '', disabled: true }]
          
        });

    this.service.getcustomerdetails(localStorage.username).subscribe(data=>{
      if(data!=null)
      this.editProfileForm.setValue(data);
    },err=>{
      console.log(err)
      
      
    });
  }else if(localStorage.role=="admin"){
    this.isAdmin=true;

    this.editProfileForm = this.formBuilder.group({
   

      adminName: ['', [Validators.required,this.customPatternValid({
        pattern: /^([^0-9]*)$/, msg: 'Numbers not Allowed..'}),
         Validators.pattern("^[0-9A-Z][0-9a-zA-Z]*(?: [0-9A-Z][0-9a-zA-Z]*){0,2}$")]],
      username: [{ value: '', disabled: true }],
      adminContact: ['', [Validators.required,  Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[a-zA-Z6-9][A-Za-z0-9]*"), this.customPatternValid({
        pattern: /^([^a-b A-z]*)$/, msg: 'only numbers are expected'})]],
      password: [{ value: '', disabled: true }],
      securityQuestion:[{ value: '', disabled: true }],
      answer:[{ value: '', disabled: true }]
        
      });

    this.service.getAdmindetails(localStorage.username).subscribe(data=>{
      if(data!=null)
      this.editProfileForm.setValue(data);
    },err=>{
      console.log(err)
      
      
    });
  }
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

  editUser() 
  {
    this.submitted = true;

    if (this.editProfileForm.invalid) {
      return;
    }
    if(localStorage.role=="customer"){
    this.service.editUser(this.editProfileForm.getRawValue()).subscribe(data=>{
      alert(data);
      // this.router.navigate(['/customer']);
      console.log(data);
    },err=>{
      console.log(err)
    });
  }else{
    this.service.editAdmin(this.editProfileForm.getRawValue()).subscribe(data=>{
      alert(data);
      // this.router.navigate(['/customer']);
      console.log(data);
    },err=>{
      console.log(err)
    });
  }

}


}
