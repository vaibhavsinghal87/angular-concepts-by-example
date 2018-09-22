import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'concepts', loadChildren: 'app/features/concepts-container/concepts-container.module#ConceptsContainerModule' },
  { path: '', redirectTo: 'concepts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
