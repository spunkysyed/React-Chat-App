import React from "react";

function ProfileHeader({ user }) {
  return (
    <>    
      <img className="avatar2" src={user.image} alt="profile-pic" />
      <p className="m-0">{user.name}</p>
    </>
  );
}

export default ProfileHeader;