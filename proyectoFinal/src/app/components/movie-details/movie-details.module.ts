import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule, RouterModule, FontAwesomeModule
  ],
  exports: [MovieDetailsComponent]
})
export class MovieDetailsModule { }
