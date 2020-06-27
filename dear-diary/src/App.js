import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Diary from './components/Diary';
import DiaryCalendar from './components/DiaryCalendar';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/diary/:date' component={Diary} />
      <Route exact path='/calendar' component={DiaryCalendar} />
    </div>
  );
}

export default App;
