import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieCarouselModule } from 'src/app/components/movie-carousel/movie-carousel.module';
import { MovieDetailsModule } from 'src/app/components/movie-details/movie-details.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieCarouselModule, MovieDetailsModule, RouterModule],
  exports: [MovieComponent],
})
export class MovieModule {}
