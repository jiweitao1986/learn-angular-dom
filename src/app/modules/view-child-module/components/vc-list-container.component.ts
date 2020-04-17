import {
  Component, Injector,  Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

import { VcListHeaderComponent } from './vc-list-header.component';
import { VcListComponent } from './vc-list.component';
import { VcListItemComponent } from './vc-list-item.component';


@Component({
  selector: 'app-vc-list-container',
  template: `
    <div class="vc-list-container">
      <h2>VcListContainerComponent</h2>
      <app-vc-list-header></app-vc-list-header>
      <app-vc-list>
        <app-vc-list-item [content]="firstItemContent"></app-vc-list-item>
        <app-vc-list-item [content]="secondItemContent"></app-vc-list-item>
        <app-vc-list-item [content]="thirdItemContent"></app-vc-list-item>
      </app-vc-list>
      <app-vc-list>
        <app-vc-list-item [content]="firstItemContent"></app-vc-list-item>
      </app-vc-list>
      <app-vc-list-footer></app-vc-list-footer>
    </div>
  `,
  providers: [
  ]
})
export class VcListContainerComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public firstItemContent = 'First';
  public secondItemContent = 'Second';
  public thirdItemContent = 'Third';

  @ViewChild(VcListHeaderComponent)
  public listHeaderViewChild: VcListHeaderComponent;

  @ViewChildren(VcListComponent)
  public listViewChildren: QueryList<VcListComponent>;

  @ViewChild(VcListComponent)
  public listViewChild: QueryList<VcListComponent>;

  @ViewChild(VcListItemComponent)
  public listItemViewChildren: QueryList<VcListItemComponent>;

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
