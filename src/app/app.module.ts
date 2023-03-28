import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [/* ... */],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule 
  ],
  providers: [/* ... */],
  bootstrap: [AppComponent]
})
export class AppModule { }
