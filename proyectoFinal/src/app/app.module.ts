import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieModule } from './views/movie/movie.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NgbModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
