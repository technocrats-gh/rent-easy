import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import '../../Styles/Hamburger.scss'
import '../../Styles/LandingPage.scss'

const LogoutButton = () => {
  // localStorage.removeItem(userRentEasy)
  const { logout } = useAuth0();

  const returnUrl = process.env.REACT_APP_REDIRECT_LOGOUT;
  const handleLogOut = () => {
    localStorage.removeItem("userRentEasy")
    localStorage.removeItem("agentProfilePic")
    localStorage.removeItem("AgentId_Entered")
    logout({ logoutParams: { returnTo: returnUrl } })
  } 

  return (
    <button className="btn style-btn" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogoutButton;