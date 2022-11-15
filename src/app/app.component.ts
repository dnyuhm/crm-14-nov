import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  public title: string;
  public close: boolean;
  private obs$: Observable<any>;
  private sub: Subscription;

  constructor() {
    this.title = 'crm';
    this.close = false;
    this.obs$ = new Observable<any>((listX) => {
      listX.next(Math.random());
    });
    this.sub = this.obs$.subscribe((number) => console.log(number));

    // this.obs$.subscribe((number) => console.log(number));
  }

  public toggle(): void {
    this.close = !this.close;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
