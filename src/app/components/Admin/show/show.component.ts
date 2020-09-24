import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from 'src/app/models/Show';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  addscreenForm: FormGroup;
  submitted: boolean = false;
show:Show[];
screen:Screen[];
screenid:string;
tid:string;
id:number;
  constructor(private builder2:FormBuilder,private router:Router,private route:ActivatedRoute,private movieser:MovieService) { }

  ngOnInit() {
    this.id = localStorage.tid;
    this.tid = localStorage.getItem("tid");
    this.screenid=this.route.snapshot.paramMap.get("id");
    console.log(this.screenid);


    this.addscreenForm = this.builder2.group({
      //username:['',Validators.required,Validators.pattern('^[a-z0-9_-]{3,15}$')],

      showId: new FormControl('', [
        Validators.required,
         Validators.pattern("[0-9]+"),
        //  Validators.maxLength(5),
      ]),

      screenId: new FormControl('', [
        Validators.required,
         Validators.pattern("[0-9]+"),
        //  Validators.maxLength(5),
      ]),

      showStartTime: new FormControl('', [
        Validators.required,
        
      ]),

      showEndTime: new FormControl('', [
        Validators.required,
        
      ]),

      theaterId: new FormControl(this.id, [
        Validators.required,
         Validators.pattern("[0-9]+"),
         Validators.maxLength(5),
      ]),

      showName: new FormControl('', [
        Validators.required,
        // Validators.pattern("[a-zA-Z]+")
        Validators.pattern( "[a-zA-Z0-9]+[a-zA-Z0-9 ]+")
      ])

     



      
    
    }
    )

// this.movieser.getAllTheaters().subscribe(data=>{
//   this.theater=data;
//   console.log(this.theater);
// })

// this.movieser.getAllShows().subscribe(data=>{
//   this.show=data;
//   console.log(this.show);
// })

this.movieser.getScreenById(Number(this.screenid)).subscribe(data=>{
  this.show=data["showList"];
  console.log(data["showList"]);
})
  }

  onsubmit() {
    this.submitted=true;
    console.log(this.addscreenForm.invalid)
    if(this.addscreenForm.invalid)
    {
      return;
    }
    this.movieser.addShow(this.addscreenForm.value,this.addscreenForm.value.screenId).subscribe(data=>{
      console.log(data);
      
      alert("show added successfully");
      location.reload();
      
    })
  
  }

  deleteShow(objj:Show)
  {
    let result = confirm("Do you want to delete show");
    if(result){
      this.movieser.deleteShow(objj.showId).subscribe(data=>{
        console.log(data);
        this.show=this.show.filter(u=> u !== objj);
       
      },
      err => {
        console.log(err.stack);
      }
  
      );
     
    }
   
    alert("Show is Deleted..!");
   
    location.reload();
  }



}
