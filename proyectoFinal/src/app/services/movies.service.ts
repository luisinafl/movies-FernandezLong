import { Injectable } from '@angular/core';
import { Movie, movies } from '../models/movies.define';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies = movies;
  items: MovieService[] = [];

  getMovies() {
    return this.movies;
  }
  getMovie(id: number) {
    return this.movies.find((movie) => {
      return movie.id == id;
    })!;
  }

  addToCart(product: MovieService) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
