import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EgyCurrencyPipe } from './pipes/egy-currency.pipe';
import { CartComponent } from './components/cart/cart/cart.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    EgyCurrencyPipe,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
