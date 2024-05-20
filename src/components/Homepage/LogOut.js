import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../../Styles/Hamburger.scss'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout" onClick={() => logout({ logoutParams: { returnTo:"http://localhost:3000/" } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;