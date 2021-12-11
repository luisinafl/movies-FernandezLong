import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie, movies } from 'src/app/models/movies.define';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private service: MovieService) {
    this.movies = this.service.getMovies();
  }

  ngOnInit(): void {}
}
