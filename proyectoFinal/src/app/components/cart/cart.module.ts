import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, MatTableModule],
  exports: [CartComponent, MatTableModule],
})
export class CartModule {}
