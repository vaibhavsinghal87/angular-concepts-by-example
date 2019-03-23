import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { MultiplyPipe } from './pipes/multiply.pipe';
import { ShowFullTextDirective } from './directives/show-full-text.directive';

import { CounterComponent } from './components/counter/counter.component';
import { KeypointsComponent } from './components/keypoints/keypoints.component';
import { ResetCounterComponent } from './components/reset-counter/reset-counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    CounterComponent,
    KeypointsComponent,
    ResetCounterComponent,
    ShowFullTextDirective,
    MultiplyPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CounterComponent,
    KeypointsComponent,
    ResetCounterComponent,
    ShowFullTextDirective,
    MultiplyPipe
  ]
})
export class SharedModule { }
