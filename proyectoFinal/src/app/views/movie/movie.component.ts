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
  movie: Movie;
  movieId: number = this.route.snapshot.params.id;
  constructor(private service: MovieService, private route: ActivatedRoute) {
    this.movie = this.service.getMovie(this.movieId);
  }
  ngOnInit(): void {}
}
