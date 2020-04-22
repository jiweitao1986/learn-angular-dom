/**
 * --------------------------------------------------------------------------------
 * 1、
 * --------------------------------------------------------------------------------
 */

import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-feature-for',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let item of items; let i=index; trackBy: trackByItems;">{{i}}: {{item.name}}</li>
    </ul>
  `,
  providers: [
  ]
})
export class FeatureForComponent  {

  public title: string;
  public items: any[];

  constructor() {
    this.title = 'Feature-For';
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
