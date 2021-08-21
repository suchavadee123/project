import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BasketComponent } from './basket/basket.component';
import { HistoryCancelComponent } from './history/history-cancel.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { MenuDetailComponent } from './menu/menu-detail.component';
import { MenuComponent } from './menu/menu.component';
import { PayComponent } from './pay/pay.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'menu',
  component: MenuComponent
}, {
  path: 'menu/detail',
  component: MenuDetailComponent
}, {
  path: 'history',
  component: HistoryComponent
}, {
  path: 'history/cancel',
  component: HistoryCancelComponent
}, {
  path: 'user',
  component: UserComponent
}, {
  path: 'basket',
  component: BasketComponent
}, {
  path: 'pay',
  component: PayComponent
}, {
  path: 'address',
  component: AddressComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
