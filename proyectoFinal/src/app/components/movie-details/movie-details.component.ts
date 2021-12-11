import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies, Movie } from 'src/app/models/movies.define';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  movieId: number = this.route.snapshot.params.id;
  constructor(private service: MovieService, private route: ActivatedRoute) {
    this.movie = this.service.getMovie(this.movieId);
  }
  ngOnInit(){}
}
