import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

const COMPONENTS_SHARED = [
  CardComponent
]
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: COMPONENTS_SHARED,
  exports: COMPONENTS_SHARED
})
export class SharedModule { }