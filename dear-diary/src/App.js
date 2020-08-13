import React from 'react';
import { Route } from "react-router-dom";

import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Diary from './components/Diary';
import DiaryCalendar from './components/DiaryCalendar';
import PrivateRoute from './components/PrivateRoute';
import './App.css';



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/diary/:date' component={Diary} />
      <PrivateRoute exact path='/calendar' component={DiaryCalendar} />
    </div>
  );
}

export default App;
