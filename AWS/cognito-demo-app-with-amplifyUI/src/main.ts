import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from 'aws-amplify';
import amplify from './aws-exports';

//Use if you are creating a user pool using the amplify add auth method in the cli
//Amplify.configure(amplify);

//Modify and use if you created your cognito user pool ahead of time
Amplify.configure({
  Auth:{
    mandatorySignIn:true,
    region: 'Your Region',
    userPoolId: 'Your Pool ID',
    userPoolWebClientId: 'Your Client ID',
    authenticationFlowType:'USER_PASSWORD_AUTH'
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
