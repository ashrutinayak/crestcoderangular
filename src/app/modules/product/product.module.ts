import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class ProductModule { }
