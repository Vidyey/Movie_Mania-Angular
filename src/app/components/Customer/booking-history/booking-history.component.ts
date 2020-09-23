import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  tickets:Ticket[];
  

  constructor(private service: MovieService) { }

  ngOnInit() {
    
    this.service.getBookings(localStorage.username).subscribe(data=>{
      this.tickets=data;
    },
  err=>{
    console.log(err.stack);
  })
  }

  

}
