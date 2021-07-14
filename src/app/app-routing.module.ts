import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'welcome',component:WelcomeComponent},
{path:'checkout',component:CheckoutComponent},
{path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
