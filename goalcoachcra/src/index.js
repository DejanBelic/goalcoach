import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import { Router, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx';

ReactDOM.render(
  <BrowserRouter>
    <>
    <Route path="/app" component={App} />
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
  </>
  </BrowserRouter>, document.getElementById("root")
);
