import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  VcRootComponent, VcListContainerComponent,
  VcListHeaderComponent, VcListFooterComponent,
  VcListComponent, VcListItemComponent
} from './components/index';
import { VcRoutingModule } from './vc-routing.module';

@NgModule({
  declarations: [
    VcRootComponent,
    VcListContainerComponent,
    VcListHeaderComponent,
    VcListFooterComponent,
    VcListComponent,
    VcListItemComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VcRoutingModule
  ],
  providers: [
  ]
})
class VcModule {
}

export { VcModule };
