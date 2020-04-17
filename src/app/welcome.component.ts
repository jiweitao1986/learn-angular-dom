import { Component, Injectable } from '@angular/core';

@Injectable()
export class WelcomeService {
  welcome() {
    console.log('WelcomeService');
  }
}

@Injectable()
export class WelcomeViewService {
  welcome() {
    console.log('WelcomeViewService');
  }
}


@Component({
  selector: 'app-welcome',
  providers: [
    WelcomeService,
    { provide: 'PROVIDER_TOKEN', useValue: 'PROVIDER_VALUE'},
  ],
  viewProviders: [
    WelcomeViewService,
    { provide: 'VIEW_PROVIDER_TOKEN', useValue: 'VIEW_PROVIDER_VALUE'},
  ],
  template: `
    <div>
      <h3>{{title}}</h3>
      <div>
        <ng-template>
          Welcome NgTemplate
          <app-bye></app-bye>
        </ng-template>
        <ng-content></ng-content>
        <ng-container></ng-container>
        <app-bye></app-bye>
      </div>
    </div>
  `
})
export class WelcomeComponent {
  title = 'W';
  
  
}
