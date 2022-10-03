/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { HelloService } from './hello/hello.service';

@Component({
  selector: 'zizifn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild('btn1', {read: ElementRef})
  btn1Drag!: ElementRef<HTMLElement>;
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

  movies = [
    'Episode I',
    'Episode II',
  ];
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

 onCdkDragDrop(event: any){
    console.log(event);
  }

  liDrop(event: DragEvent){
    const left = (event.target as HTMLLIElement).getBoundingClientRect().x;
    this.btn1Drag.nativeElement.style.left = `${left}px`;
    console.log('drop');
    console.log(event);
  }
  ondragover(event: DragEvent){
    event.preventDefault();
    console.log(event);
  }


}
