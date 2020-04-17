import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleParentComponent } from './components/index';

const routes: Routes = [
  { path: 'simple', component: SimpleParentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
class SimpleRoutingModule {}

export { SimpleRoutingModule };
