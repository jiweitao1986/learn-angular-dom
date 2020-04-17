import { Component, AfterViewInit, OnDestroy, Injector, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cc-list-footer',
  template: `
    <div class="cc-list-footer">
      <h3>CcListFooterr</h3>
    </div>`,
  providers: []
})
export class CcListFooterComponent implements AfterViewInit, OnDestroy {

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