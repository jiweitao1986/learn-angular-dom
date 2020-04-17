import { Component, AfterViewInit, OnDestroy, Injector, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-list-item',
  template: '<div class="simple-list-item">ListItem-{{content}}</div>',
  providers: []
})
export class SimpleListItemComponent implements AfterViewInit, OnDestroy {

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