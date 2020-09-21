import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Theater } from '../models/Theater';
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

public addtheater(theater:Theater)
{
  console.log(theater);
  return this.http.post("http://localhost:1091/movie/addTheater",theater,{responseType:'text'});
}
public deletetheater(theaterId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteTheater/${theaterId}`);
}

public addScreen(screen:Screen,theaterId:number)
{
  return this.http.post(`http://localhost:1091/movie/addScreen/${theaterId}`,screen,{responseType:'text'});
}

public deleteScreen(screenId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteScreen/${screenId}`,{responseType:'text'});
} 
}
