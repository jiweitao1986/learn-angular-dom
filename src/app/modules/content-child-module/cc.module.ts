import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CcRootComponent, CcListContainerComponent,
  CcListHeaderComponent, CcListComponent, CcListItemComponent, CcListFooterComponent
} from './components/index';
import { CcRoutingModule } from './cc-routing.module';

@NgModule({
  declarations: [
    CcRootComponent,
    CcListContainerComponent,
    CcListHeaderComponent,
    CcListComponent,
    CcListItemComponent,
    CcListFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CcRoutingModule
  ],
  providers: [
  ]
})
class CcModule {
}

export { CcModule };
