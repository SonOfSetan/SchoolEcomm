// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { ResourceAttributesComponent } from './shared/components/resource-attributes/resource-attributes.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'attributes', component: ResourceAttributesComponent },
  { path: 'products',loadChildren: () => import('./features/products/products.module').then(m=>m.ProductsModule) },//component: ProductListComponent }, // This is your direct component route
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'orders', loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const appRoutes = routes;
