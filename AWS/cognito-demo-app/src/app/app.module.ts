import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import Amplify, { Auth } from 'aws-amplify';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';

Amplify.configure({
    Auth:{
      mandatorySignIn:true,
      region: 'us-east-2',
      userPoolId: 'your pool id',
      userPoolWebClientId: 'you client id',
      authenticationFlowType:'USER_PASSWORD_AUTH'
    }
  });

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
