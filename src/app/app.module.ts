import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {LoginComponent} from "./login/login.component";
import { TesteComponent } from './teste/teste.component';
import { AlertComponent } from './alert/alert.component';
import { GuardsComponent } from './guard/guards.component';
import { HelpersComponent } from './helper/helpers.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TesteComponent,
    AlertComponent,
    GuardsComponent,
    HelpersComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
