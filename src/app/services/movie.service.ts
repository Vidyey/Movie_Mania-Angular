import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Theater } from '../models/Theater';
import { Screenn } from '../models/Screenn';
import { Show } from '../models/Show';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

 
public addmovie(movie:Movie)
{
  console.log(movie);
  return this.http.post("http://localhost:1091/movie/addMovie",movie,{responseType:'text'});
}

public addShow(show:Show)
{
return this.http.post("http://localhost:1091/movie/addShow",show,{responseType:'text'});

}

public getallMovies()
{
  return this.http.get<Movie[]>("http://localhost:1091/movie/getMovies");
}


public getAllShows()
{
return this.http.get<Show[]>("http://localhost:1091/movie/getShow");
}


public addtheater(theater:Theater)
{
  console.log(theater);
  return this.http.post("http://localhost:1091/movie/addTheater",theater,{responseType:'text'});
}

public deletetheater(theaterId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteTheater/${theaterId}`);
}

public getAllTheaters()
{
  return this.http.get<Theater[]>("http://localhost:1091/movie/getTheater");
}

public getAllScreens()
{
  return this.http.get<Screenn[]>("http://localhost:1091/movie/getScreen");
}
public addScreen(screen:Screenn,theaterId:number)
{
  return this.http.post(`http://localhost:1091/movie/addScreen/${theaterId}`,screen,{responseType:'text'});
}

public deleteScreen(screenId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteScreen/${screenId}`,{responseType:'text'});
} 

public deleteShow(showId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteShow/${showId}`,{responseType:'text'});
}

}
