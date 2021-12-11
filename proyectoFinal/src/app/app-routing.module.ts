import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MovieComponent } from './views/movie/movie.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'movie/:id', component: MovieComponent },
  { path: 'movie', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
