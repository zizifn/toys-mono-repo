import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../hello/hello.service';
import { Hello2Service } from '../../hello/hello2.service';

@Component({
  selector: 'zizifn-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[
    { provide: HelloService, useClass: Hello2Service }]
})
export class ChildComponent implements OnInit {

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
  }

  clickme(){
    this.helloService.output();
  }

}
