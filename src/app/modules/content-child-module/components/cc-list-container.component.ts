import {
  Component, Injector,  Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

import { CcListHeaderComponent } from './cc-list-header.component';
import { CcListComponent } from './cc-list.component';
import { CcListItemComponent } from './cc-list-item.component';


@Component({
  selector: 'app-cc-list-container',
  template: `
    <div class="cc-list-container">
      <h2>CcListContainerComponent</h2>
      <app-cc-list-header></app-cc-list-header>
      <app-cc-list>
        <app-cc-list-item [content]="firstItemContent"></app-cc-list-item>
        <app-cc-list-item [content]="secondItemContent"></app-cc-list-item>
        <app-cc-list-item [content]="thirdItemContent"></app-cc-list-item>
      </app-cc-list>
      <app-cc-list>
        <app-cc-list-item [content]="firstItemContent"></app-cc-list-item>
      </app-cc-list>
      <app-cc-list-footer></app-cc-list-footer>
    </div>
  `,
  providers: [
  ]
})
export class CcListContainerComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public firstItemContent = 'First';
  public secondItemContent = 'Second';
  public thirdItemContent = 'Third';

  @ViewChild(CcListHeaderComponent)
  public listHeaderViewChild: CcListHeaderComponent;

  @ViewChildren(CcListComponent)
  public listViewChildren: QueryList<CcListComponent>;

  @ViewChild(CcListComponent)
  public listViewChild: QueryList<CcListComponent>;

  @ViewChild(CcListItemComponent)
  public listItemViewChildren: QueryList<CcListItemComponent>;

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
    // console.log('listHeaderViewChild: ' + this.listHeaderViewChild);
    // console.log('listViewChild: ' + this.listViewChild);
    // console.log('listViewChildren: ' + this.listViewChildren);
    // console.log('listItemViewChildren: ' + this.listItemViewChildren);
  }

  /**
   * 视图初始化后
   */
  ngAfterContentInit() {
    // console.log('listItemContentChildren: ' + this.listItemContentChildren.length);
    // console.log('listItemContentChild: ' + this.listItemContentChild);
  }

  /**
   * 组件销毁时
   */
  ngOnDestroy() {
  }
}
