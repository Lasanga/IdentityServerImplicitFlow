import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './identity/authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService: OAuthService) {
    this.configure();
  }
  title = 'ImplicitFrontend';


  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.setStorage(localStorage);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login(): void {
    this.oauthService.initImplicitFlow();
    var ss = this.oauthService.getAccessToken();
  }

}
