import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lchmod } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-mania';
  isAdmin: boolean = false;
  isGuest: boolean = false;
  isCustomer: boolean = false;
  todaysDate = new Date();

  constructor(private router : Router) {  setInterval(() => {
    this.todaysDate = new Date();
  }, 1000);
}

  ngOnInit() {
    if(localStorage.role=="admin")
    this.isAdmin=true;
    else if(localStorage.role=="customer")
    this.isCustomer=true;
    else
    this.isGuest=true;
  }

  logout(){
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    
    this.router.navigate(['']);
  }
  
}
