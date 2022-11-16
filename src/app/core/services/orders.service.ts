import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi: string;
  public collection$: Observable<Order[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = this.httpClient.get<Order[]>(`${this.urlApi}/orders`);

    console.log(this.collection$);
  }

  public add(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`, order);
  }

  public getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  public update(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(
      `${this.urlApi}/orders/${order.id}`,
      order
    );
  }
}
