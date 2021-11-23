import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './Firebase/firebaseConfig';
import { Provider } from 'react-redux';
import  configureStore  from "./store/index";
import Auth0ProviderWithHistory from './auth0-provider-with-history';

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <Router>
      <Auth0ProviderWithHistory >
        <App />
      </Auth0ProviderWithHistory>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);