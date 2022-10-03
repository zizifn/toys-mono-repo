import { } from '@zizifn/app1-profile'
// import '@zizifn/ui-lit-demo'

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child/child.component';
import {OverlayModule } from '@angular/cdk/overlay'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { CdkListboxModule } from '@angular/cdk/listbox'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ChildComponent],
  imports: [
    BrowserModule,
    OverlayModule,
    DragDropModule,
    CdkListboxModule,
    RouterModule.forRoot([
      {
        path: 'profile',
        loadChildren: () =>
          import('@zizifn/app1-profile').then((m) => m.AngularApp1ProfileModule),
      }
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
