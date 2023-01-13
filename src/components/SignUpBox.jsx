import React, { useRef } from 'react';
import { redirect } from 'react-router';

const SignUpBox = (props) => {
  const { onLoginChange, pathToUser } = props;
  console.log(onLoginChange);
  console.log(pathToUser);

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const makeAccount = () => {
    fetch('http://localhost:3000/user/signup', {
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
        pathToUser(data);
        onLoginChange(true);
      })
      .catch(err => console.log(err))
  };

  return (
  <div className='signup-box'>
    <h1>Make a New Account</h1>
    <form id='signup-field' method='POST' action='/login'>
        <input ref={usernameInput} type="text" id='input-field' placeholder='New Username'/>
        <input ref={passwordInput} type="text" id='input-field' placeholder='New Password'/>
    </form>
    <button id='account-button' onClick={makeAccount}>Sign Up</button>
  </div>
  )
};

export default SignUpBox;