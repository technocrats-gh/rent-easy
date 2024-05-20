import React from "react";
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
          <span style={{display:"flex", flexDirection:"column", marginTop:"5px"}}>
            <span style={{fontSize:"16px"}}>{user.name}</span>
            <span style={{fontSize:"11px"}}>{user.email}</span>
          </span>
        </span>
      </div>
    )
  );
};

export default Profile;