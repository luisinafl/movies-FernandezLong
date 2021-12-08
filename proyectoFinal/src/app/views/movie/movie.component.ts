import { Component, OnInit } from '@angular/core';
import { Movie, movies } from 'src/app/models/movies.define';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies: Movie | undefined;
  constructor() {}

  ngOnInit(): void {}
}
