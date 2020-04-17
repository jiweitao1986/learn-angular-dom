/**
 * --------------------------------------------------------------------------------
 * 1、
 * --------------------------------------------------------------------------------
 */

import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList, Input
} from '@angular/core';


@Component({
  selector: 'app-feature-list-item',
  template: `
    <li>{{item.name}}</li>
  `,
  providers: [
  ]
})
export class FeatureListItemComponent  {

  @Input()
  public item: any;

  constructor() {
  }

}


@Component({
  selector: 'app-feature-list',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <app-feature-list-item *ngFor="let item of items; let i=index; trackBy: trackByItems;" [item]="item"></app-feature-list-item>
    </ul>
  `,
  providers: [
  ]
})
export class FeatureListComponent  {

  public title: string;
  public items: any[];

  constructor() {
    this.title = 'Feature - List';
    this.items = [
      {id: 1, name: 'item-1st'},
      {id: 2, name: 'item-2nd'},
      {id: 3, name: 'item-3rd'},
    ];
  }

  trackByItems(index: number, item: any): number {
    return item.id;
  }
}
