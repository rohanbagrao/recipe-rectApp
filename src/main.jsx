import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-prmft7opf56eg604.us.auth0.com"
    clientId="lba3fMg6TStLL4SxrIc0mx5Pzq7so1Gm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
     <Provider store={store}>
       <App />
    </Provider>
  </BrowserRouter>
  </Auth0Provider>

)
