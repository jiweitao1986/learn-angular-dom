import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';
import { VcListItemComponent } from './vc-list-item.component';

@Component({
  selector: 'app-vc-list',
  template: `
    <div class="vc-list">
      <h3>VcListComponent</h3>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  providers: [
  ]
})
export class VcListComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  @ContentChildren(VcListItemComponent)
  public listItemContentChildren: QueryList<VcListItemComponent>;

  @ContentChild(VcListItemComponent)
  public listItemContentChild: QueryList<VcListItemComponent>;

  constructor() {
  }

  /**
   * 视图初始化后
   */
  ngAfterViewInit() {
  }

  /**
   * 视图初始化后
   */
  ngAfterContentInit() {
    console.log('listItemContentChildren: ' + this.listItemContentChildren.length);
    console.log('listItemContentChild: ' + this.listItemContentChild);
  }


  /**
   * 组件销毁时
   */
  ngOnDestroy() {
  }
}
