import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_BASE_URL } from 'libs/web/shared-data-access-api-sdk/src';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: API_BASE_URL, useValue: environment.apiBaseUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
