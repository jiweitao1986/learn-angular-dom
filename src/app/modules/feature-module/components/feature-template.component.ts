import {
  Component, Injector, Input, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewContainerRef, TemplateRef,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';


@Component({
  selector: 'app-feature-template-child',
  template: `
    <p>{{content}}</p>
  `,
  providers: [
  ]
})
export class FeatureTemplateChildComponent  {

  @Input()
  public content: string;

  constructor() {
  }
}


@Component({
  selector: 'app-feature-template',
  template: `
    <h2>{{title}}</h2>
    <ng-container #vc></ng-container>
    <ng-template #tpl>
      <div>Feature - Template - Static</div>
      <app-feature-template-child [content]="'Feature - Template - Child'"></app-feature-template-child>
    </ng-template>
  `,
  providers: [
  ]
})
export class FeatureTemplateComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public title: string;

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  @ViewChild('tpl') tpl: TemplateRef<any>;


  constructor() {
    this.title = 'Feature-Template';
  }

  ngAfterViewInit() {
    // const view = this.tpl.createEmbeddedView(null);
    // this.vc.insert(view);
  }

  ngAfterContentInit() {
    const view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view)
  }

  ngOnDestroy() {
  }
}
