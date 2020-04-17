import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VcRootComponent } from './components/index';

const routes: Routes = [
  { path: 'vc', component: VcRootComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
class VcRoutingModule {}

export { VcRoutingModule };
