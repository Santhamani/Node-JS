import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent
  ], //import SubcomponentComponent 
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindingComponent] //includue SubcomponentComponent 
})
export class AppModule { }
