import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AppRoutingModule,
    // NgbCarouselConfig
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
