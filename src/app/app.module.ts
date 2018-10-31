import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ForbiddenNameValidatorDirective } from './contact-form/forbidden-name-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ForbiddenNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
