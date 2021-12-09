import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCarouselComponent } from './movie-carousel.component';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MovieCarouselComponent],
  imports: [CommonModule, ],
  exports: [MovieCarouselComponent],
  bootstrap: [MovieCarouselComponent]
})
export class MovieCarouselModule {}
