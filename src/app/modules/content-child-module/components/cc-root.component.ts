import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-cc-root',
  template: `
    <div class="cc-root">
      <h2>Cc Root</h2>
      <div>
        <app-cc-list-container></app-cc-list-container>
      </div>
    </div>
  `,
  providers: [
  ]
})
export class CcRootComponent implements AfterViewInit, AfterContentInit, OnDestroy {

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
  }


  /**
   * 组件销毁时
   */
  ngOnDestroy() {
  }
}
