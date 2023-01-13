import React from "react";

const UserDescription = (props) => {
  const { user } = props;

  return (
    <div id="description">
      <p>Animal Type: { user.profile.animalType ? user.profile.animalType : 'dog' }</p>
      <p>{ user.profile.description ? user.profile.description : 'FEED ME!' }</p>
    </div>
  );
}

export default UserDescription;