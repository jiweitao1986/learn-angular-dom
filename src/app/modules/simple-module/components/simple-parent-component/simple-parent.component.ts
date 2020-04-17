import { Component, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-parent',
  templateUrl: './simple-parent.component.html',
  providers: []
})
export class SimpleParentComponent implements AfterViewInit, OnDestroy {

  public title = 'Simple Parent Title';

  public content = 'Simple Parent Content';

  public classValue = true;

  public attrValue = 'attr-value';

  public styleValue = 'red';

  public firstBtnState = true;

  public secondBtnState = true;

  public childContent = 'ChildContent From Parnt';

  public childRemark = {
    title:   'ChildRemarkTitle From Parent',
    content: 'ChildRemarkContent From Parent'
  };

  constructor() {
  }

  /**
   * 改变子组件的内容
   */
  changeChildContent() {
    const now = (new Date()).toISOString();
    this.childContent = 'ChildContent From Parnt: ' + now;
  }

  /**
   * 改变子组件的内容
   */
  changeChildRemark() {
    const now = (new Date()).toISOString();
    this.childRemark.title = 'ChildRemarkTitle From Parent: ' + now;
    this.childRemark.content = 'ChildRemarkContent From Parent: ' + now;
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
