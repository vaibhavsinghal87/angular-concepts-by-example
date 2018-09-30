import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
