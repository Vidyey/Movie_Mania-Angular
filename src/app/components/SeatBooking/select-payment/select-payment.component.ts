import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/Booking';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.css']
})
export class SelectPaymentComponent implements OnInit {

  bookingstart : Booking;
  constructor(private router:Router,private movieser:MovieService) { }

  ngOnInit(): void {

    let loc : any[];

    loc =  sessionStorage.sessionStorage.locArray;

    let sid = sessionStorage.showId;

    //let cust = sessionStorage.custID;

    let cust = 1025;

    this.movieser.getchoosePaymentMethod(sid, loc, cust).subscribe(data => {
      this.bookingstart = data;
      console.log(this.bookingstart);
      
      sessionStorage.bookingId = this.bookingstart.bookingId;
     
    })
  }


    makePayment(){

      let bid = sessionStorage.bookingId;

      this.movieser.makepayment(bid).subscribe(data => {
        alert(data) });

    }
    
  


}
