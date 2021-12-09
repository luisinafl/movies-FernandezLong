import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie, movies } from 'src/app/models/movies.define';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies: Movie | undefined;
  constructor(private route: ActivatedRoute, private routeSub: Subscription) {}

  ngOnInit(): void {}
}
