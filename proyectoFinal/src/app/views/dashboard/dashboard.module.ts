import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartModule } from 'src/app/components/cart/cart.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule, CartModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
