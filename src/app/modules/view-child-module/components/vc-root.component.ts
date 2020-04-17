import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-vc-root',
  template: `
    <div class="vc-root">
      <h2>Vc Root</h2>
      <div>
        <app-vc-list-container></app-vc-list-container>
      </div>
    </div>
  `,
  providers: [
  ]
})
export class VcRootComponent implements AfterViewInit, AfterContentInit, OnDestroy {

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
