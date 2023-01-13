import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture.jsx';
import UserDescription from '../components/UserDescription.jsx';
import Feed from '../components/Feed.jsx';

const ProfileContainer = (props) => {
  const { user } = props;
  console.log(user);

  if(user) {
    return (
      <div className='profileContainer'>
        <div id='username-display'>{user.username}</div>
        <ProfilePicture user={user}/>
        <UserDescription user={user}/>
        <Feed user={user}/>
      </div>
    )
  }
};

// useEffect(() => {
//   let fetchID;
//   const startFetch = () => {
//     fetchID = setInterval(fetchData, 1000);
//   }
//   const stopFetch = () => {
//     clearInterval(fetchID);
//   }
//   startFetch();
//   return () => stopFetch();
// }, []);

export default ProfileContainer;