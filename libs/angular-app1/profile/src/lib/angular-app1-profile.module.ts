import { Route, RouterModule } from '@angular/router';

import { ArticlesComponent } from './favorites/articles/articles.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

export const angularApp1ProfileRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      component: ProfileComponent
    },
    {
      path: 'articles',
      component: ArticlesComponent
    }
  ])],
  declarations: [
    ProfileComponent,
    ArticlesComponent
  ],
})
export class AngularApp1ProfileModule { }
