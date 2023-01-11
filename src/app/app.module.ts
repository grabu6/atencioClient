import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './projecte/components/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './projecte/components/reactive-forms/reactive-forms.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RubricaComponent } from './projecte/components/rubrica/rubrica.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    RubricaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
