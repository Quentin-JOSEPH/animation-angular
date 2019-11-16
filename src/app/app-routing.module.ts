import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: false,
        anchorScrolling: 'enabled',
        enableTracing: false
      } // enableTracing <-- true debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
