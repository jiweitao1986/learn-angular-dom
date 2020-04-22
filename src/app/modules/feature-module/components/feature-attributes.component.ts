import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-feature-attribute',
  template: `
    <h2>{{title}}</h2>
    <p
      id="my-p"
      [attr.some-attr]="attrValue"
      [class.some-class]="classValue"
      [style.color]="styleValue"
    >Feature - Attribute - Content</p>
  `,
  providers: [
  ]
})
export class FeatureAttributeComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public title: string;

  public classValue = true;

  public attrValue = 'attr-value';

  public styleValue = 'red';

  constructor() {
    this.title = 'Feature-Text';
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }
}
