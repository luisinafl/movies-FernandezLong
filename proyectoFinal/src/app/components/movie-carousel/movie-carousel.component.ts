import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { movies } from 'src/app/models/movies.define';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class MovieCarouselComponent implements OnInit {


  movies = movies;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
ngOnInit():void{}
}
