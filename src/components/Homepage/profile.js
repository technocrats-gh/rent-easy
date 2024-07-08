import React from "react";
import '../../Styles/HomePage.scss'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <span style={{display:"flex", gap:"10px"}}>
          <img src={user.picture} alt={user.name} className='img-shadow' />
          <span style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}>
            <span className='profile-name' >{user.name}</span>
            <span className='profile-email'>{user.email}</span>
          </span>
        </span>
      </div>
    )
  );
};

export default Profile;