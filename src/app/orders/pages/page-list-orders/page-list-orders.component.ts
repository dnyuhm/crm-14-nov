import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.css'],
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService, private router: Router) {
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Actions',
      'Type',
      'Client',
      'Durée',
      'Tjm HT',
      'Total HT',
      'total TTC',
      'Statut',
    ];
  }

  ngOnInit(): void {}

  public goToEdit(id: number) {
    this.router.navigate(['orders', 'edit', id]);
  }
}
