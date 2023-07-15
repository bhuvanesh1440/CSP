import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SchemesFormComponent } from './components/schemes-form/schemes-form.component';
import { SchemesformComponent } from './components/schemesform/schemesform.component';
import { SchemeschatComponent } from './components/schemeschat/schemeschat.component';
import { SchemeaddComponent } from './components/schemeadd/schemeadd.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ChatComponent,
    Home2Component,
    AboutComponent,
    ContactComponent,
    SchemesFormComponent,
    SchemesformComponent,
    SchemeschatComponent,
    SchemeaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
