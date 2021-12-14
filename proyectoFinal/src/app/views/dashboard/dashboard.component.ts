import { Component, OnInit } from '@angular/core';
import { Movie, movies } from 'src/app/models/movies.define';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { selectedMovie } from 'src/app/models/selectedMovie.define';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cartIcon = faShoppingCart;

  movies = movies;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  moviesList: Movie[];
  amount: number;
  selectedMovie: selectedMovie[];

  constructor() {
    this.selectedMovie = [];
    this.amount = 0;
    this.moviesList = movies;
    // this.product = MovieService
  }
  ngOnInit(): void {
    // this.getMovies();
  }

  addToCart(name: string, price: number) {
    let index = this.selectedMovie.findIndex((movie) => movie.name == name);
    if (index == -1) {
      let selectedMoviesGroup = {
        name: name,
        price: price,
        amount: this.amount,
      };
      this.selectedMovie = [...this.selectedMovie, selectedMoviesGroup];
    } else {
      this.selectedMovie[index].amount += 1;
      console.log('Carrito:');
      console.log(this.selectedMovie);
    }
  }
}
