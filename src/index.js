import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import Layout from './components/Layout';
import StartLogin from './components/StartLogin';
import LandingPage from './components/landingPage';
import HomePage from './components/Homepage/index'
import { Agents } from './components/pages/agents';
import { Listings } from './components/pages/listings';
import { Register } from './components/pages/register';
import { SettingsProfile } from './components/pages/profile';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { store, rrfConfig } from './Redux/store';
import { app } from './firebase';
import { createFirestoreInstance } from 'redux-firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rrfProps = {
  firebase: app,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // Needed if using Firestore
};

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: process.env.REACT_APP_REDIRECT_URI
  },
  cacheLocation: "localstorage"
}
root.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path='/' element={<Layout />}>
                <Route path="/LogIn" element={<StartLogin />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/pages/agents" element={<Agents />} />
                <Route path="/pages/listings" element={<Listings />} />
                <Route path="/pages/register" element={<Register />} />
                <Route path="/pages/profile" element={<SettingsProfile />} />
              </Route>
            </Routes>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
