import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './components/index';

const routes: Routes = [
  { path: 'feature', component: FeatureComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
class FeatureRoutingModule {}

export { FeatureRoutingModule };
