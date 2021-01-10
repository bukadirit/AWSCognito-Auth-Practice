import { Component, OnInit, Input, inject, Inject, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
// import { Auth } from 'aws-amplify';
//import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private router: Router, private ref: ChangeDetectorRef) { }
  //public amplify: AmplifyService

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
  
  
  //this.amplify.auth().currentAuthenticatedUser().then(console.log)
  // async loginWithCognito() {
  //   try {
  //     var user = await Auth.signIn(this.email.toString(), this.password.toString());
  //     console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
  //     var tokens = user.signInUserSession;
  //     if (tokens != null) {
  //       console.log('User authenticated');

  //       this.router.navigate(['home']);
  //       alert('You are logged in successfully !');

  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert('User Authentication failed');
  //   }
  // }
}