import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './components/Admin/movielist/movielist.component';
import { ScreenComponent } from './components/Admin/screen/screen.component';
import { ShowComponent } from './components/Admin/show/show.component';
import { TheaterComponent } from './components/Admin/theater/theater.component';

import { SearchMovieComponent } from './components/search-movie/search-movie.component';


const routes: Routes = [
  {path:'search',component:SearchMovieComponent},
  {path:'movielist',component:MovielistComponent},
  {path:'theater',component:TheaterComponent},
  {path:'screen',component:ScreenComponent},
  {path:'show',component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
