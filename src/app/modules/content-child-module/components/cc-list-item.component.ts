import { Component, AfterViewInit, OnDestroy, Injector, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cc-list-item',
  template: '<div class="cc-list-item">ListItem-{{content}}</div>',
  providers: []
})
export class CcListItemComponent implements AfterViewInit, OnDestroy {

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
