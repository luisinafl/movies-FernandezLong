import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AppRoutingModule,
    FontAwesomeModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
