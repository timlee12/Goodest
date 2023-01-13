import React from "react";
import { render } from "react-dom";
import MainContainer from "./containers/MainContainer.jsx";
import SignUpBox from "./components/SignUpBox.jsx";
import FakePage from "./components/FakePage.jsx";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import { useState, useEffect } from "react";
import ProfileContainer from "./containers/ProfileContainer.jsx";
import AddDetails from "./components/AddDetails.jsx";

const App = () => {
  const [isValidated, setValidation] = useState(false);
  const [currentUser, setUser] = useState(null);
  const [userCreated, createUser] = useState(false);

  const onLoginChange = (status) => {
    return setTimeout(() => {
      console.log('loading...')
      setValidation(status)
    }, 1000)
  }

  const pathToUser = user => {
    return setUser(user);
  }

  const pathToProfile = (status) => {
    return createUser(status)
  }
  
  useEffect(() => {
    console.log('validation status is now: ', isValidated);
    console.log('user is now: ', currentUser);
  });  
  
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path='/signup' element={ isValidated ? <Navigate to='/details' /> : <SignUpBox onLoginChange={onLoginChange} pathToUser={pathToUser}/>}></Route>
            <Route exact path='/login' element={ isValidated ? <Navigate to='/profile' /> : <LoginContainer onLoginChange={onLoginChange} pathToUser={pathToUser}/>}></Route>
            <Route exact path='/fakepage' element={<FakePage />}></Route>
            <Route exact path='/details' element={<AddDetails user={currentUser}/>}></Route>
            <Route exact path='/profile' element={<ProfileContainer user={currentUser}/>}></Route>
            <Route path='/' element={ isValidated ? <Navigate to='/profile' /> : <Navigate to='/login' /> }></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;