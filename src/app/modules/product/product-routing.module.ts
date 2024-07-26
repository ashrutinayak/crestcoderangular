import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from '../auth/service/auth.guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'list', component: ProductComponent, title: 'ListProduct'},
  { path: 'add', component: AddProductComponent, canActivate: [AuthGuard] , title: 'AddProduct'},
  { path: 'update', component: AddProductComponent, canActivate:[AuthGuard], title: 'UpdateProduct'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
