import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // Url of the Identity Provider
    issuer: 'https://localhost:5001',
    requireHttps: true,
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/home',
  
    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: 'Angular',
    dummyClientSecret: 'K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=',
  
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile implicit.api',
    loginUrl: 'https://localhost:5001/connect/authorize',
    logoutUrl: 'https://localhost:5001/connect/endsession',
    tokenEndpoint: 'https://localhost:5001/connect/token'
  }
  