import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';
import { Show } from 'src/app/models/Show';

@Component({
  selector: 'app-select-show',
  templateUrl: './select-show.component.html',
  styleUrls: ['./select-show.component.css']
})
export class SelectShowComponent implements OnInit {
  
  theatreShow : Show[];
  shows:Show[];
  selectedShow:Show;
  constructor(private router:Router,private movieser:MovieService) { }

  ngOnInit(): void {
    this.movieser.getAllShows().subscribe(data => {
      this.shows = data;
      console.log(this.shows);
      console.log("hii");
     
    })

    this.showList();
  }

  showList()
  {
      let tid = sessionStorage.theatreId;
    this.shows.forEach(sh => {

      if(sh.theaterId == tid)
      {
        this.theatreShow.push(sh);
      }
      
    });

    console.log(this.theatreShow);
  }

  SelectShow(i:number){

    this.selectedShow = this.theatreShow[i];
    sessionStorage.showId=this.selectedShow.showId;
    console.log(this.selectedShow.showId);

  }

}
