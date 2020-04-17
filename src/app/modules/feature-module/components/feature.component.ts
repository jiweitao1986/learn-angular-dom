import {
  Component, Injector, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-feature',
  template: `
    <h1>Features</h1>
    <div>
      <app-feature-text></app-feature-text>
      <app-feature-if></app-feature-if>
      <app-feature-for></app-feature-for>
      <app-feature-event></app-feature-event>
      <app-feature-list></app-feature-list>
      <app-feature-pipe></app-feature-pipe>
      <app-feature-attribute></app-feature-attribute>
      <app-feature-input
        [stringContent]="fStringContent"
        [objContent]="fObjContent"
        [arrayContent]="fArrayContent"
        [observableContent]="fObservableContent"
      ></app-feature-input>
      <app-feature-content>
        <div>Feature - Content - Static</div>
        <app-feature-content-child [content]="'Feature - Content - Component'"></app-feature-content-child>
      </app-feature-content>
      <app-feature-template></app-feature-template>
      <app-feature-query></app-feature-query>
    </div>
  `,
  providers: [
  ]
})
export class FeatureComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public fStringContent = 'strContent';
  public fObjContent = { content: 'objContent' };
  public fArrayContent = ['arrayContent-1', 'arrayContent-2'];
  public fObservableContent = of('observableContent');

  constructor() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
  }
}
