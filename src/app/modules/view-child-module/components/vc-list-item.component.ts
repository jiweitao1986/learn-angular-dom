import { Component, AfterViewInit, OnDestroy, Injector, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vc-list-item',
  template: '<div class="vc-list-item">ListItem-{{content}}</div>',
  providers: []
})
export class VcListItemComponent implements AfterViewInit, OnDestroy {

  @Input()
  public content: string;

  constructor(
  ) {
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
