import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string;
  public close: boolean;

  constructor() {
    this.title = 'crm';
    this.close = false;
  }

  public toggle(): void {
    this.close = !this.close;
  }
}
