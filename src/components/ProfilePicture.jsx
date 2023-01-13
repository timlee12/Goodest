import React from "react";
import doge from '../docs/doge.png'

const ProfilePicture = (props) => {
  const { user } = props;

  return (
    <div id="profile-pic">
      {user.profile.profilePic ? user.profile.profilePic : <img id='doge' src={doge}></img> }
    </div>
  );
}

export default ProfilePicture;