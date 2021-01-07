import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UpdateProfile from './components/UpdateProfile';
import PrivateRoute from './PrivateRoute';

function App() {
  return <BrowserRouter> 
    <PrivateRoute path = "/" exact component = {Dashboard}/>
    <Route path = "/signin" exact component = {SignIn}/>
    <Route path = "/signup" exact component = {SignUp}/>
    <PrivateRoute path = "/update-profile" exact component = {UpdateProfile}/>
  </BrowserRouter>
}

export default App;
