import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './components/Admin/movielist/movielist.component';
import { ScreenComponent } from './components/Admin/screen/screen.component';
import { TheaterComponent } from './components/Admin/theater/theater.component';

import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { SeatMapComponent } from './components/SeatBooking/seat-map/seat-map.component';
import { CityComponent } from './components/SeatBooking/city/city.component';
import { SelectMovieComponent } from './components/SeatBooking/select-movie/select-movie.component';

import { SelectShowComponent } from './components/SeatBooking/select-show/select-show.component';
import { SelectTheatreComponent } from './components/SeatBooking/select-theatre/select-theatre.component';


const routes: Routes = [
  {path:'search',component:SearchMovieComponent},
  {path:'movielist',component:MovielistComponent},
  {path:'theater',component:TheaterComponent},
  {path:'screen',component:ScreenComponent},
  {path:'selectseat', component:SeatMapComponent},
  {path:'citysetting',component:CityComponent},
  {path:'SelectMovie', component:SelectMovieComponent},
  {path:"selectshow", component:SelectShowComponent},
  {path:"selectTheatre",component:SelectTheatreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
