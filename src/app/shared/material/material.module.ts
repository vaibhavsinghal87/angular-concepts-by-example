import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
