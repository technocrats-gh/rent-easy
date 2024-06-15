import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import StartLogin from './components/StartLogin';
import AuthLogin from './components/Login';
import LandingPage from './components/landingPage';
import SignUpPage from './components/SignUp';
import HomePage from './components/Homepage/index'
import { Auth0Provider } from '@auth0/auth0-react';
// import '././Styles/Transition.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: "http://localhost:3000/HomePage"
  }
}
root.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
    </Router>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
