import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersModule } from '../orders/orders.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [CommonModule],
  exports: [OrdersModule, HeaderComponent, NavComponent, FooterComponent],
})
export class CoreModule {}
