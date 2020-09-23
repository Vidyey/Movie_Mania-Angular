import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css']
})
export class SeatMapComponent implements OnInit {

  colArray = new Array(10);
  rowArray = new Array(5);
  constructor() { }

  ngOnInit(): void {
  }

}
