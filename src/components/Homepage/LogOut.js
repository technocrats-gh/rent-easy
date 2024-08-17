import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import '../../Styles/Hamburger.scss'
import '../../Styles/LandingPage.scss'

const LogoutButton = () => {
  // localStorage.removeItem(userRentEasy)
  const { logout } = useAuth0();

  const handleLogOut = () => {
    localStorage.removeItem("userRentEasy")
    logout({ logoutParams: { returnTo: "http://localhost:3000/" } })
  } 

  return (
    <button className="btn" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogoutButton;