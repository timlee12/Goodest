import React from 'react';
import { useRef } from 'react';
import { redirect } from 'react-router-dom';
import { useState } from 'react';

const LoginBox = (props) => {
  const { onLoginChange, pathToUser } = props;
  console.log(onLoginChange);
  console.log(pathToUser);

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const login = () => {
    console.log(usernameInput.current.value)
    console.log(passwordInput.current.value)
    
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameInput.current.value,
        password: passwordInput.current.value
      })
    })
      .then(data => data.json())
      .then(data => {
        console.log('data received', data)
        if(data) {
          pathToUser(data)
          onLoginChange(true);
        }
      })
      .catch(err => console.log(err))
  };

  return (
    <div className='login-box'>
      <form id='login-field'>
        <input ref={usernameInput} type="text" id='input-field' placeholder='Username'/>
        <input ref={passwordInput} type="text" id='input-field' placeholder='Password'/>
      </form>
      <button id='account-button' onClick={login}>Submit</button>
    </div>
  )
};

export default LoginBox;