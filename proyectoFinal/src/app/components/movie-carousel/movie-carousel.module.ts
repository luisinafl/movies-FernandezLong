import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCarouselComponent } from './movie-carousel.component';

@NgModule({
  declarations: [MovieCarouselComponent],
  imports: [CommonModule],
  exports: [MovieCarouselComponent],
})
export class MovieCarouselModule {}
