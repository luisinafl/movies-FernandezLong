import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { MovieComponent } from './views/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: LoginRegisterComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'movie/:id', component: MovieComponent },
  { path: 'movie', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
