import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCarouselComponent } from './movie-carousel.component';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [MovieCarouselComponent],
  imports: [CommonModule, CarouselModule.forRoot()],
  exports: [MovieCarouselComponent],
  bootstrap: [MovieCarouselComponent]
})
export class MovieCarouselModule {}
