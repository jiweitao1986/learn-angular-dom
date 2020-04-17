import {
  Component, Injector, Input, Output, EventEmitter,
  AfterViewInit, AfterContentInit, OnDestroy,
  ViewContainerRef, TemplateRef,
  ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList
} from '@angular/core';

@Component({
  selector: 'app-feature-query-grand',
  template: `
    <p>{{content}}</p>
  `,
  providers: [
  ]
})
export class FeatureQueryGrandComponent  {

  @Input()
  public content: string;

  constructor() {
  }
}

@Component({
  selector: 'app-feature-query-child',
  template: `
    <h4>{{content}}</h4>
    <ng-content></ng-content>
  `,
  providers: [
  ]
})
export class FeatureQueryChildComponent  {

  @Input()
  public content: string;

  constructor() {
  }
}


@Component({
  selector: 'app-feature-query',
  template: `
    <h2>{{title}}</h2>

    <div>
      <ng-container #vc></ng-container>
      <ng-template #tpl>
        <div>Feature - Template - Static</div>
        <app-feature-template-child [content]="'Feature - Template - Child'"></app-feature-template-child>
      </ng-template>
    </div>

    <div>
      <app-feature-query-child [content]="'Feature-Query-Child-1'">
        <app-feature-query-grand [content]="'Feature-Query-Grand-11'"></app-feature-query-grand>
        <app-feature-query-grand [content]="'Feature-Query-Grand-12'"></app-feature-query-grand>
      </app-feature-query-child>
      <app-feature-query-child [content]="'Feature-Query-Child-2'">
        <app-feature-query-grand [content]="'Feature-Query-Grand-21'"></app-feature-query-grand>
        <app-feature-query-grand [content]="'Feature-Query-Grand-22'"></app-feature-query-grand>
      </app-feature-query-child>
    </div>
  `,
  providers: [
  ]
})
export class FeatureQueryComponent implements AfterViewInit, AfterContentInit, OnDestroy {

  public title: string;

  @ViewChild('vc', {read: ViewContainerRef})
  public vc: ViewContainerRef;

  @ViewChild('tpl')
  public tpl: TemplateRef<any>;

  @ViewChild(FeatureQueryChildComponent)
  public childComponent: FeatureQueryChildComponent;

  @ViewChildren(FeatureQueryChildComponent)
  public childComponents: QueryList<FeatureQueryChildComponent>;

  @ContentChild(FeatureQueryGrandComponent)
  public grandComponent: FeatureQueryGrandComponent;

  @ContentChildren(FeatureQueryGrandComponent)
  public grandComponents: QueryList<FeatureQueryGrandComponent>;


  constructor() {
    this.title = 'Feature-Query';
  }

  ngAfterViewInit() {
    console.log(this.childComponent);
    console.log(this.childComponents);
  }

  ngAfterContentInit() {
    const view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);

    console.log(this.grandComponent);
    console.log(this.grandComponents);
  }

  ngOnDestroy() {
  }
}
