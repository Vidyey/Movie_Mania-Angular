import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/Services/movie.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-select-movie',
  templateUrl: './select-movie.component.html',
  styleUrls: ['./select-movie.component.css']
})
export class SelectMovieComponent implements OnInit {

  movies: Movie[];

  selectedMovie : Movie;

  constructor(private router: Router, private movieser: MovieService) { }


  ngOnInit(): void {

    this.movieser.getallMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
      console.log("hii");
    })

  }

  selectMovie(i:number){

    this.selectedMovie = this.movies[i];
    sessionStorage.movieid=this.selectedMovie.movieId;
    console.log(this.selectedMovie.movieId);

  }

}
