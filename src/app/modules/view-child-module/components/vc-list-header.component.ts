import { Component, AfterViewInit, OnDestroy, Injector, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vc-list-header',
  template: `
    <div class="vc-list-header">
      <h3>VcListHeader</h3>
    </div>`,
  providers: []
})
export class VcListHeaderComponent implements AfterViewInit, OnDestroy {

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
