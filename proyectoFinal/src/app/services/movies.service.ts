import { Injectable } from '@angular/core';
import { Movie, movies } from '../models/movies.define';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies= movies

  getMovies() {
    return this.movies;
  }
  getMovie(id:number){
    return this.movies.find((movie)=>{
      return movie.id==id
    }
    )!
  }
  constructor(){}
}
