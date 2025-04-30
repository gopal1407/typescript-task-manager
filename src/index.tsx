import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-04x8vmk41c1vxbs7.us.auth0.com" // 👈 Your domain
    clientId="GD662JXOGn6Whls0snFykTtQ34zxCWxl"               // 👈 Get from Auth0 UI
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
