import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
