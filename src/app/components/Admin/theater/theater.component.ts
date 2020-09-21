import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Theater } from 'src/app/models/Theater';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {
  addtheaterForm: FormGroup;
  submitted: boolean = false;
  list:Theater;
theaterlist:string;
  constructor(private builder1:FormBuilder,private router:Router,private movieser:MovieService) { }

  ngOnInit() {

    this.addtheaterForm = this.builder1.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],

      theaterId: new FormControl('', [
        Validators.required,
         Validators.pattern("[0-9]+"),
         Validators.maxLength(5),
      ]),


      theaterName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),

      theaterCity: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),

      managerName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),

      managerContact: new FormControl('', [
        Validators.required,
        
        Validators.minLength(8),  
      Validators.maxLength(12),  

         Validators.pattern('[7-9][0-9]{9}')
      ]),




      
    
    })

  }
  onsubmit() {
    this.submitted=true;
    console.log(this.addtheaterForm.invalid)
    if(this.addtheaterForm.invalid)
    {
      return;
    }
    this.movieser.addtheater(this.addtheaterForm.value).subscribe(data=>{
      console.log(data);
      alert("theater added successfully");
      //this.list=data;
      //this.theaterlist=data;
    })
  }

deleteMovie()
{
  this.movieser.deletetheater(this.addtheaterForm.value.theaterId).subscribe(data=>{
    console.log(data);
  })

}

}
