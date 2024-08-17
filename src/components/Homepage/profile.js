import React, { useEffect } from "react";
import '../../Styles/HomePage.scss'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (user) {
      localStorage.setItem("userRentEasy", JSON.stringify(user));
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <span style={{display:"flex", gap:"10px"}}>
          <img src={user.picture} alt={user.name} className='user-img' />
        </span>
      </div>
    )
  );
};

export default Profile;


