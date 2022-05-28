import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Hello2Service {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
  output(){
    console.log('hello service2');
  }
}
