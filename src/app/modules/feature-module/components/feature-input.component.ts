import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList, Input
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feature-input',
  template: `
    <h2>{{title}}</h2>
    <p>{{stringContent}}</p>
    <p>{{objContent.content}}</p>
    <p>{{arrayContent[0]}}</p>
    <p>{{observableContent | async}}</p>
  `,
  providers: [
  ]
})
export class FeatureInputComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public title: string;

  @Input()
  public stringContent: string;

  @Input()
  public objContent: any;

  @Input()
  public arrayContent: any[];

  @Input()
  public observableContent: Observable<any>;

  constructor() {
    this.title = 'Feature - Input';
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }
}
