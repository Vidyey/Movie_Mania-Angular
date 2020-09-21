import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  addmovieForm: FormGroup;
  submitted: boolean = false;


  constructor(private builder:FormBuilder,private router:Router,private movieser:MovieService) { }

  ngOnInit() {

    this.addmovieForm = this.builder.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],

      movieId: new FormControl('', [
        Validators.required,
         Validators.pattern("[0-9]+"),
         Validators.maxLength(5),
      ]),


      movieName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),


      movieGenre: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),

      movieDirector: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),




      
      movieLength: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(100),
        Validators.pattern("[0-9]+")
      ]),
      
      
      //email:['',Validators.required],

      languages: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
        
      ]),


      movieReleaseDate: new FormControl('', [
        Validators.required,
       
  
      ]),


    })
    
  }
  onsubmit() {

  this.submitted=true;
  console.log(this.addmovieForm.invalid)
  if(this.addmovieForm.invalid)
  {
    return;
  }
  this.movieser.addmovie(this.addmovieForm.value).subscribe(data=>{
    console.log(data);
    alert("Movie added sucessfully");
  })
}
}
