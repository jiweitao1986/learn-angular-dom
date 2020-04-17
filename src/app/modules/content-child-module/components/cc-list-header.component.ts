import { Component, AfterViewInit, OnDestroy, Injector, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cc-list-header',
  template: `
    <div class="cc-list-header">
      <h3>CcListHeader</h3>
    </div>`,
  providers: []
})
export class CcListHeaderComponent implements AfterViewInit, OnDestroy {

  constructor() {
  }

  /**
   * 视图初始化后
   */
  ngAfterViewInit() {
  }

  /**
   * 组件销毁时
   */
  ngOnDestroy() {
  }
}
