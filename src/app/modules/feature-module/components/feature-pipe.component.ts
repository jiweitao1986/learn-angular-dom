import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-feature-pipe',
  template: `
    <h2>{{title}}</h2>
    <p>{{ now | date }}</p>
  `,
  providers: [
  ]
})
export class FeaturePipeComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public title: string;

  public now: Date;

  constructor() {
    this.title = 'Feature - Pipe';
    this.now = new Date();
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }
}
