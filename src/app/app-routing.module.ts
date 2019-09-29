import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {  path: 'customers',   loadChildren: './modules/customers/customers.module#CustomersModule'  },
  {  path: 'orders', loadChildren: './modules/orders/orders.module#OrdersModule' },
  {  path: '',   redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      //preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }