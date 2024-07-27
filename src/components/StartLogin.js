import React from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import '../Styles/LandingPage.scss'

const StartLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>; 

};

export default StartLogin;