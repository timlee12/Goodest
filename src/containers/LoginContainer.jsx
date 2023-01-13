import React from 'react';
import LoginBox from '../components/LoginBox.jsx';
import Welcome from '../components/Welcome.jsx';
import { useEffect } from 'react';
import { useState } from 'react';



const LoginContainer = (props) => {
  const { onLoginChange, pathToUser } = props;

  return (
    <div className='login'>
      <Welcome />
      <LoginBox onLoginChange={onLoginChange} pathToUser={pathToUser}/>
    </div>
  )
};

export default LoginContainer;