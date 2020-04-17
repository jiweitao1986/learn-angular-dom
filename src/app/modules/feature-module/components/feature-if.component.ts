import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-feature-if',
  template: `
    <h2>{{title}}</h2>
    <p>
      <span *ngIf="status==='pass'">通过</span>
      <span *ngIf="status==='notPass'">不通过</span>
    </p>
  `,
  providers: [
  ]
})
export class FeatureIfComponent  {

  public title: string;
  public status: string;

  constructor() {
    this.title = 'Feature - If';
    this.status = 'pass';
  }
}
