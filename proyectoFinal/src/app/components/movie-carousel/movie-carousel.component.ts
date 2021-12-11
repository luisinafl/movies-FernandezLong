import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie, movies } from 'src/app/models/movies.define';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class MovieCarouselComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  movie: Movie;
  movieId: number = this.route.snapshot.params.id;

  constructor(
    config: NgbCarouselConfig,
    private service: MovieService,
    private route: ActivatedRoute
  ) {
    this.movie = this.service.getMovie(this.movieId);

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {}
}
