import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [MovieDetailsComponent]
})
export class MovieDetailsModule { }
