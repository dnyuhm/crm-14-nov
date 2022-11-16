import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageTestComponent } from './pages/page-test/page-test.component';

const routes: Routes = [
  { path: 'orders', component: PageListOrdersComponent },
  { path: 'orders/add', component: PageAddOrderComponent },
  { path: 'orders/edit/:id', component: PageEditOrderComponent },
  { path: 'test', component: PageTestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
