import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FeatureTextComponent,
  FeatureIfComponent,
  FeatureForComponent,
  FeatureEventChildComponent,
  FeatureEventComponent,
  FeatureListItemComponent,
  FeatureListComponent,
  FeaturePipeComponent,
  FeatureAttributeComponent,
  FeatureInputComponent,
  FeatureComponent,
  FeatureContentChildComponent,
  FeatureContentComponent,
  FeatureTemplateChildComponent,
  FeatureTemplateComponent,
  FeatureQueryGrandComponent,
  FeatureQueryChildComponent,
  FeatureQueryComponent,
} from './components/index';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [
    FeatureTextComponent,
    FeatureIfComponent,
    FeatureForComponent,
    FeatureEventChildComponent,
    FeatureEventComponent,
    FeatureListItemComponent,
    FeatureListComponent,
    FeaturePipeComponent,
    FeatureAttributeComponent,
    FeatureInputComponent,
    FeatureContentChildComponent,
    FeatureContentComponent,
    FeatureTemplateChildComponent,
    FeatureTemplateComponent,
    FeatureQueryGrandComponent,
    FeatureQueryChildComponent,
    FeatureQueryComponent,
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureRoutingModule
  ],
  exports: [
    FeatureComponent
  ],
  providers: [
  ]
})
class FeatureModule {
}

export { FeatureModule };
