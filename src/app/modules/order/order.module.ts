import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './order-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order.component';
import { AddOrderComponent } from './add-order/add-order.component';
@NgModule({
  declarations: [
    OrderComponent,
    AddOrderComponent
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
  bootstrap: [OrderComponent]
})
export class OrderModule { }
