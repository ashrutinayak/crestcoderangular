import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AuthGuard } from '../auth/service/auth.guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'list', canActivate: [AuthGuard], component: OrderComponent, title: 'OrderList'},
  { path: 'add',  canActivate: [AuthGuard], component: AddOrderComponent, title: 'AddOrder'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
