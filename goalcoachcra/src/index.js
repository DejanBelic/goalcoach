import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import { Router, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx';
import { firebaseApp } from "./firebase";

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or out ', user)
  }
  else {
    console.log('user has signed out or still needs to sign in')
  }
})

ReactDOM.render(
  <BrowserRouter>
    <>
    <Route path="/app" component={App} />
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
  </>
  </BrowserRouter>, document.getElementById("root")
);
