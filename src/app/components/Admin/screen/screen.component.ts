import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Screenn } from 'src/app/models/Screenn';
import { Theater } from 'src/app/models/Theater';
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
  theater:Theater[];
  tid:string;

  constructor(private builder2:FormBuilder,private router:Router,private route:ActivatedRoute, private ser:MovieService) { }

  ngOnInit() {

    localStorage.removeItem("tid");

    this.tid=this.route.snapshot.paramMap.get("id");
    localStorage.setItem("tid",this.tid);
    console.log(this.tid);
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
    // this.ser.getAllTheaters().subscribe(data=>{
    //   this.screen=data;
    //   console.log(this.theater);
    // })

    // this.ser.getAllTheaters().subscribe(data=>{
    //     this.theater=data;
    //     console.log(data.)
    // })

    this.ser.getTheaterById(Number(this.tid)).subscribe(data=>{
      this.screen = data["listOfScreens"]; 
      console.log(data["listOfScreens"]);
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
// getAll()
// {
//   this.ser.getAllScreens().subscribe(data=>{
  
//     this.screen=this.tid.filter();

//     console.log(this.screen);
//   })

// }
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

