import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from "./orders/orders.module";
import { SiteFrameworkModule } from "./site-framework/site-framework.module";
// import { ListOrdersComponent  } from "./orders/list-orders/list-orders.component";

@NgModule({
  declarations: [
    AppComponent,
    // ListOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule
    // ListOrdersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
