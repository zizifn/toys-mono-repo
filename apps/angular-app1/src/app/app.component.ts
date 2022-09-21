import { Component, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { HelloService } from './hello/hello.service';

@Component({
  selector: 'zizifn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mySub = new Subject<boolean>();;

  constructor(private helloService: HelloService, private ngZone: NgZone){
    (window as any).myTest = this.mySub;

    this.mySub.subscribe((open)=>{

      this.ngZone.run(
        ()=>{
          this.isOpen = open;

        }
      )
    })
  }
  title = 'angular-app1';
  isOpen = false;

  clickme(){
    this.helloService.output();
  }

  backdropclick(){
    console.log('000000000000000');
    this.isOpen = false;
  }

  overlayKeydown(event: any){
    this.isOpen =false;
    console.log('888888888888888888');
  }


}
