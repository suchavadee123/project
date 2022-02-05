import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HistoryComponent } from './history/history.component';
import { UserComponent } from './user/user.component';
import { BasketComponent } from './basket/basket.component';
import { PayComponent } from './pay/pay.component';
import { AddressComponent } from './address/address.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableClientComponent } from './datatable/table-client/table-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HistoryComponent,
    UserComponent,
    BasketComponent,
    PayComponent,
    AddressComponent,
    TableClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    CommonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
