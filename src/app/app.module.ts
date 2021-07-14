import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './welcome/nav/nav.component';
import { FooterComponent } from './welcome/footer/footer.component';
import { BodyComponent } from './welcome/body/body.component';
import { ProductListComponent } from './cart/product-list/product-list.component';
import { BuyComponent } from './cart/buy/buy.component';
import { FilterComponent } from './cart/filter/filter.component';
import { CategoryComponent } from './cart/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CheckoutComponent,
    CartComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    ProductListComponent,
    BuyComponent,
    FilterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
