import { Component, AfterViewInit, OnDestroy, Injector, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vc-list-footer',
  template: `
    <div class="vc-list-footer">
      <h3>VcListFooterr</h3>
    </div>`,
  providers: []
})
export class VcListFooterComponent implements AfterViewInit, OnDestroy {

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