import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/movie.service';
import { Router } from '@angular/router';
import { Show } from 'src/app/models/Show';
import { Seat } from 'src/app/models/Seat';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css']
})
export class SeatMapComponent implements OnInit {

  colArray = new Array(10);
  rowArray = new Array(5);
  curruntShow : Show;
  blockedseat : Seat; 

  seatlist : Seat[];

  locArray : any[];
  constructor(private router:Router,private movieser:MovieService) { }

  ngOnInit(): void {

    let show = sessionStorage.showId;

    this.movieser.getShowbyId(show).subscribe(data => {
      this.curruntShow = data;
      console.log(this.curruntShow);
    })

   this.seatlist = this.curruntShow.SeatList
    let index = 0;
   this.seatlist.forEach(seat => {

      if (seat.seatStatus == "Blocked" || seat.seatStatus == "booked")
      {
        this.colArray[(index%10)-1] = 1;
        this.rowArray[index/10] = 1;
      }
     
   });


  }

  Selectseat(rowindex : number ,colindex : number)
  {
    let loc = (rowindex*10)+(colindex);
    this.blockedseat = this.curruntShow.SeatList[loc];
    
    this.movieser.selectSeatbyid(this.blockedseat.seatId);

    this.locArray = sessionStorage.locArray;

    this.locArray.push(rowindex);
    this.locArray.push(colindex);

    sessionStorage.locArray = this.locArray;


  }

  UnblockSeat(){

    sessionStorage.removeItem('this.locArray');

  }

  
}
