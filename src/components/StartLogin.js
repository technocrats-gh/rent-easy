import React from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import '../Styles/LandingPage.scss'

const StartLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className="" onClick={() => loginWithRedirect()}>Log In</div>;
  // return <button className="btn style-btn" onClick={() => loginWithRedirect()}>Log In</button>; 

};

export default StartLogin;