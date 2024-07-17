import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  declarations: [AppComponent, ListItemComponent, FormInputComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
