import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcRootComponent } from './components/index';

const routes: Routes = [
  { path: 'cc', component: CcRootComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
class CcRoutingModule {}

export { CcRoutingModule };
