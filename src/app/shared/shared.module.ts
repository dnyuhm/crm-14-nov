import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe, BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [TotalPipe, BtnComponent],
})
export class SharedModule {}
