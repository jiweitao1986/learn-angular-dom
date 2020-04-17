/**
 * --------------------------------------------------------------------------------
 * 1、传参：$event, 实例属性、模板变量
 * --------------------------------------------------------------------------------
 */

import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';


@Component({
  selector: 'app-feature-event-child',
  template: `
    <div>
      <button (click)="clickHandler($event)">Trigger CustomClick</button>
    </div>
  `,
  providers: [
  ]
})
export class FeatureEventChildComponent  {

  public title: string;

  @Output()
  public customClick: EventEmitter<any>;

  constructor() {
    this.title = 'FeatureEventChild';
    this.customClick = new EventEmitter<any>();
  }

  clickHandler(event): void {
    this.customClick.emit('customClick...');
  }
}

@Component({
  selector: 'app-feature-event',
  template: `
    <h2>{{title}}</h2>
    <div>
      <button (click)="clickHandler($event)">Trigger Click</button>
    </div>
    <div>
      <app-feature-event-child (customClick)="customClickHandler($event)"></app-feature-event-child>
    </div>
  `,
  providers: [
  ]
})
export class FeatureEventComponent  {

  public title: string;
  public items: any[];

  constructor() {
    this.title = 'Feature - Event';
  }

  clickHandler(event): void {
    console.log(event);
  }

  customClickHandler(event): void {
    console.log(event);
  }
}
