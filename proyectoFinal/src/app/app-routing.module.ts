import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './views/movie/movie.component';

const routes: Routes = [
  {path: 'movie/:id', component: MovieComponent},
  {path: 'movie', component: MovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
