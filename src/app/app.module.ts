import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

import { MovielistComponent } from './components/Admin/movielist/movielist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TheaterComponent } from './components/Admin/theater/theater.component';
import { ScreenComponent } from './components/Admin/screen/screen.component';
import { CityComponent } from './components/SeatBooking/city/city.component';
import { DashBoardComponent } from './components/SeatBooking/dash-board/dash-board.component';
import { SeatMapComponent } from './components/SeatBooking/seat-map/seat-map.component';
import { HeaderComponent } from './components/SeatBooking/header/header.component';
import { SelectMovieComponent } from './components/SeatBooking/select-movie/select-movie.component';
import { SelectTheatreComponent } from './components/SeatBooking/select-theatre/select-theatre.component';
import { SelectShowComponent } from './components/SeatBooking/select-show/select-show.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
  
    MovielistComponent,
  
    TheaterComponent,
  
    ScreenComponent,
  
    CityComponent,
  
    DashBoardComponent,
  
    SeatMapComponent,
  
    HeaderComponent,
  
    SelectMovieComponent,
  
    SelectTheatreComponent,
  
    SelectShowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
