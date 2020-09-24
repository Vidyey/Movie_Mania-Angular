import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  tickets:Ticket[];
  

  constructor(private service: MovieService,private router :Router) { }

  ngOnInit() { 
    if (localStorage.username == null) {
    this.router.navigate(['/search']);
  }
  else
    {
    this.service.getBookings(localStorage.username).subscribe(data=>{
      this.tickets=data;
    },
  err=>{
    console.log(err.stack);
  })}
  }

  

}
