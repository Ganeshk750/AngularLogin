import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomSlice } from './customslice.pipe';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CustomSlice,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
