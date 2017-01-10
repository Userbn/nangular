import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { CoucouComponent }  from './coucou.component';

const appRoutes: Routes = [
  { path: 'hello',         component: AppComponent },
  { path: 'coucou',        component: CoucouComponent },
  { path: '**',            component: AppComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, CoucouComponent ],
  bootstrap:    [ AppComponent, CoucouComponent ]
})
export class AppModule { }
