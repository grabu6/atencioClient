import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './projecte/components/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './projecte/components/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
