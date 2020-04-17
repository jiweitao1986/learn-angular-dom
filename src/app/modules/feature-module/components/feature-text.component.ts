import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-feature-text',
  template: `
    <h2>{{title}}</h2>
    <p>This page is a {{content}} Demo.</p>
  `,
  providers: [
  ]
})
export class FeatureTextComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public title: string;

  constructor() {
    this.title = 'Feature - Text';
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }
}
