import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Auth0Provider
    domain= "dev-tunpnb2c.us.auth0.com"
    clientId= "EE66YJKwyRIv0g7fS28QtCemEatgGkW5"
    redirectUri={window.location.origin}
    useRefreshTokens={ true }
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
