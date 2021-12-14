import { Component, Input, OnInit } from '@angular/core';
import { movies, Movie } from 'src/app/models/movies.define';
import { selectedMovie } from 'src/app/models/selectedMovie.define';
import { MovieCarouselComponent } from '../movie-carousel/movie-carousel.component';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  @Input() selectedMovie: selectedMovie[] = [];
  product: object;
  displayedColumns: string[] = ['pelicula', 'cantidad', 'precio'];


  constructor() {
    this.product = {};
  }
  getTotalCost() {
    console.log("dmf")

  }
  ngOnInit(): void {}


}
