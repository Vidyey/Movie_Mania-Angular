import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';
import { Theater } from 'src/app/models/Theater';

@Component({
  selector: 'app-select-theatre',
  templateUrl: './select-theatre.component.html',
  styleUrls: ['./select-theatre.component.css']
})
export class SelectTheatreComponent implements OnInit {

  theater:Theater[];
  selectedTheatre : Theater;
  constructor(private router:Router,private movieser:MovieService) { }


  ngOnInit(): void {
    let id = sessionStorage.movieId();
   
    this.movieser.getTheaterbyMovieId(id).subscribe(data => {
      this.theater = data;
      console.log(this.theater);
      console.log("hii");
    })
  }

  selectTheatre(i:number){

    this.selectedTheatre = this.theater[i];
    sessionStorage.theatreId=this.selectedTheatre.theaterId;
    console.log(this.selectedTheatre.theaterId);

  }

}
