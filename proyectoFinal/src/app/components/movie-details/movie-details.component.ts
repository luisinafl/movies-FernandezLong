import { Component, OnInit } from '@angular/core';
import { movies } from 'src/app/models/movies.define';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movies = movies;
  constructor() {}

  ngOnInit(): void {}
}
