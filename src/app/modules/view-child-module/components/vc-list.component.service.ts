import { Injectable, Injector } from '@angular/core';

@Injectable()
class ListComponentService {
  constructor(private injector: Injector) {
  }

  public do() {
    console.log('ListComponentService works');
  }
}

export { ListComponentService };
