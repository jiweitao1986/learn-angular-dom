import {
  Component, ChangeDetectorRef, ChangeDetectionStrategy, Input, SimpleChanges,
  OnInit, DoCheck, OnChanges, AfterViewInit, OnDestroy, AfterViewChecked, AfterContentChecked,
  ViewContainerRef, TemplateRef, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-simple-child',
  templateUrl: './simple-child.component.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy, AfterViewChecked, AfterContentChecked, DoCheck {

  public title = 'Simple Child Component';

  @Input()
  public content: string;

  public assoContent: string;

  @Input()
  public remark: any;

  @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild("tpl") tpl: TemplateRef<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  public changeContent() {
    const now = (new Date()).toISOString();
    this.content = 'ChildContent' + now;
  }

  public changeRemark() {
    const now = (new Date()).toISOString();
    this.remark.title = 'ChildRemarkTitle' + now;
    this.remark.content = 'ChildRemarkContent' + now;
  }

  public doNothing() {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('child onChanges');
    console.log(simpleChanges);
    this.assoContent = 'Asso ' + this.content;
  }

  /**
   * 视图初始化后
   */
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
    let view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
  }

  /**
   * 组件销毁时
   */
  ngOnDestroy() {
    console.log('child ngAfterViewInit');
  }

  ngDoCheck() {
    console.log('child ngDoCheck');
  }

  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    console.log('child ngAfterContentChecked');
  }
}
