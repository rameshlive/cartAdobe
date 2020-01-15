
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';

import { CartService } from './service/cart.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarticonComponent } from './carticon/carticon.component';
import { SearchComponent } from './search/search.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { OrdersComponent } from './orders/orders.component';


import { PricePipe } from './price.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarticonComponent,
    SearchComponent,
    ShoppinglistComponent,
    FilterComponent,
    SortComponent,
    OrdersComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
