import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

    city='';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  public selectCity(){

      console.log(this.city);
      this.router.navigate(['SelectMovie']);
      
   
  }

}
