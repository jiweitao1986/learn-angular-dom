import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-simple-grand',
  templateUrl: './simple-grand.component.html',
  providers: []
})
export class SimpleGrandComponent implements AfterViewInit, OnDestroy {

  public title = 'Simple Grand';

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
