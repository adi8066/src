// src/app/app.config.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthService } from './Services/Auth.Service'; // Adjust path if needed

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppConfig { }
