import React from 'react';
import { Route } from "react-router-dom";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Diary from './components/Diary';
import Calendar from './components/Calendar';
import PrivateRoute from './components/PrivateRoute';
import './App.css';



function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/diary/:date' component={Diary} />
      <PrivateRoute exact path='/calendar' component={Calendar} />
    </div>
  );
}

export default App;
