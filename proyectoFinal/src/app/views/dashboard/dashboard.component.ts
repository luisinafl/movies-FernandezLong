import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Movie, movies } from 'src/app/models/movies.define';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  movies = movies;
  constructor() {}


  ngOnInit(): void {
    // this.getMovies();
  }

//   getMovies(): Observable<Movie[]> {
//     return this.get<Movie[]>
//       .pipe(
//         tap(_ => this.log('fetched heroes')),
//         catchError(this.handleError<Movie[]>('getMovies', []))
//       );
// }
}
