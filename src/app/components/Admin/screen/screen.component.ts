import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Screenn } from 'src/app/models/Screenn';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  addscreenForm: FormGroup;
  submitted: boolean = false;
  screen:Screenn[];

  constructor(private builder2:FormBuilder,private router:Router,private ser:MovieService) { }

  ngOnInit() {

    this.addscreenForm = this.builder2.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],

      theaterId: new FormControl('', [
        Validators.required,
         Validators.pattern("[0-9]+"),
         Validators.maxLength(5),
      ]),
      screenId: new FormControl('', [
        Validators.required,
         Validators.pattern("[0-9]+"),
         Validators.maxLength(5),
      ]),


      screenName: new FormControl('', [
        Validators.required,
        // Validators.pattern("[a-zA-Z\s]")
        // Validators.pattern("[a-zA-Z][a-zA-Z0-9\s]*")
        
        Validators.pattern( "[a-zA-Z0-9]+[a-zA-Z0-9 ]+")
      ]),

      movieEndDate: new FormControl('', [
        Validators.required,
       
  
      ]),
      
      rows: new FormControl('', [
        Validators.required,
        
        Validators.pattern("[0-9]+")
      ]),
      
      columns: new FormControl('', [
        Validators.required,
        
        Validators.pattern("[0-9]+")
      ]),
    
    })
    this.ser.getAllScreens().subscribe(data=>{
      this.screen=data;
      console.log(this.screen);
    })
  }

  onsubmit() {
    this.submitted=true;
    console.log(this.addscreenForm.invalid)
    if(this.addscreenForm.invalid)
    {
      return;
    }
    this.ser.addScreen(this.addscreenForm.value,this.addscreenForm.value.theaterId).subscribe(data=>{
      console.log(data);
      alert("Screen added Sucessfully");
      location.reload();
      
    })
    


   
    
  }

  deleteScreen(objjj:Screenn)
{
  let result = confirm("Do you want to delete screen");
  if(result){
this.ser.deleteScreen(objjj.screenId).subscribe(data=>{
  this.screen=this.screen.filter(u=>u!== objjj);
},
err => {
  console.log(err.stack);
}
);

}
alert("Screen is Deleted..!");
 location.reload();
}
}

