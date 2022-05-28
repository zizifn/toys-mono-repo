import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  output(){
    console.log('hello service');
  }
}
