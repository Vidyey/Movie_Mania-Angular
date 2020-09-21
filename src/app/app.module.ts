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

@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
  
    MovielistComponent,
  
    TheaterComponent,
  
    ScreenComponent
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
