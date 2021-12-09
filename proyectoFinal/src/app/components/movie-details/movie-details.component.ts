import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { movies, Movie } from 'src/app/models/movies.define';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  // movies: Movie | undefined;
  movies=movies;
  // data: Observable<any[]>;
  constructor(private route: ActivatedRoute) {}



  data: any;
  ngOnInit(): void {
    // this.movies.subscribe(data => {
    //   this.data = data
    // });
  }
  // getMovie(): Observable<any> {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   return this.getMovie(id).subscribe((movie) => (this.movie = movie));
  // }
}
