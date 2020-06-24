import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Diary from './components/Diary';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/diary' component={Diary} />
    </div>
  );
}

export default App;
