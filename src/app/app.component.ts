import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string;
  public close: boolean;
  private obs$: Observable<any>;

  constructor() {
    this.title = 'crm';
    this.close = false;
    this.obs$ = new Observable<any>((listX) => {
      listX.next(Math.random());
    });

    // this.obs$.subscribe((number) => console.log(number));
    // this.obs$.subscribe((number) => console.log(number));
  }

  public toggle(): void {
    this.close = !this.close;
  }
}
