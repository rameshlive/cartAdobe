import { OrdersComponent } from './orders/orders.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ShoppinglistComponent},
    { path: 'shoplist', component: ShoppinglistComponent},
    { path: 'orders', component: OrdersComponent},
    { path: '**', redirectTo: 'shoplist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
