import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';
import { CcListItemComponent } from './cc-list-item.component';

@Component({
  selector: 'app-cc-list',
  template: `
    <div class="cc-list">
      <h3>CcListComponent</h3>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  providers: [
  ]
})
export class CcListComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  @ContentChildren(CcListItemComponent)
  public listItemContentChildren: QueryList<CcListItemComponent>;

  @ContentChild(CcListItemComponent)
  public listItemContentChild: QueryList<CcListItemComponent>;

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
