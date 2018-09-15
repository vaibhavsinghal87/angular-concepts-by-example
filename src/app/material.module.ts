import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
