import { Component } from '@angular/core';
import { HelloService } from './hello/hello.service';

@Component({
  selector: 'zizifn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private helloService: HelloService){

  }
  title = 'angular-app1';

  clickme(){
    this.helloService.output();
  }
}
