import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './Firebase/firebaseConfig';
import {Auth0Provider} from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import  configureStore  from "./store/index"

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <Router>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}  >
        <App />
      </Auth0Provider>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);