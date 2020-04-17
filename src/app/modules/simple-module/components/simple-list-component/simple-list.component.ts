import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';
import { SimpleListItemComponent } from '../simple-list-item-component/simple-list-item.component';

@Component({
  selector: 'app-simple-list',
  template: `
    <div class="simple-list">
      <h3>SimpleListComponent</h3>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  providers: [
  ]
})
export class SimpleListComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  @ContentChildren(SimpleListItemComponent)
  public listItemContentChildren: QueryList<SimpleListItemComponent>;

  @ContentChild(SimpleListItemComponent)
  public listItemContentChild: QueryList<SimpleListItemComponent>;

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
