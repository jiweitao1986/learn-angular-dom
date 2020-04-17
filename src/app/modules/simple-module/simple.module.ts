import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SimpleParentComponent, SimpleChildComponent, SimpleGrandComponent,
  SimpleListComponent, SimpleListItemComponent
} from './components/index';
import { SimpleRoutingModule } from './simple-routing.module';

@NgModule({
  declarations: [
    SimpleParentComponent,
    SimpleChildComponent,
    SimpleGrandComponent,
    SimpleListComponent,
    SimpleListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleRoutingModule
  ],
  exports: [
    SimpleParentComponent
  ],
  providers: [
  ]
})
class SimpleModule {
}

export { SimpleModule };
