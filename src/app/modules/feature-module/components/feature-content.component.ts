import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList, Input
} from '@angular/core';


@Component({
  selector: 'app-feature-content-child',
  template: `
    <p>{{content}}</p>
  `,
  providers: [
  ]
})
export class FeatureContentChildComponent  {

  @Input()
  public content: string;

  constructor() {
  }
}


@Component({
  selector: 'app-feature-content',
  template: `
    <h2>{{title}}</h2>
    <ng-content></ng-content>
  `,
  providers: [
  ]
})
export class FeatureContentComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public title: string;

  constructor() {
    this.title = 'Feature - Content';
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }
}
