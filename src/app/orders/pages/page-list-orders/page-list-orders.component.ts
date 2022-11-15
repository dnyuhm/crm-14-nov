import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.css'],
})
export class PageListOrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
