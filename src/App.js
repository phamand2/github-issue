import React, { useState } from 'react';
import './App.css';
import IssueList from './components/IssueList';
import {Switch, Route, NavLink, Redirect}from 'react-router-dom';
import IssueByNumber from './components/IssueByNumber';
import Users from './components/Users';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      { loggedIn && (
        <>
        <li><NavLink to="/issues">Issues</NavLink></li>
        <li><NavLink to="/users">Search Users</NavLink></li>
        </>
      )}
      { loggedIn
        ? (<li><button onClick={() => {setLoggedIn(false)}}>Log Out</button></li>)
        : (<li><button onClick={() => {setLoggedIn(true)}}>Log In</button></li>)
      }
    </ul>
    
    <div>
      <Switch>

        <Route exact path="/">
          <h1>Home</h1> 
        </Route>

        { loggedIn && (
          <>
            <Route path="/issues" exact component={IssueList} />
            <Route path="/issue/:number" component={IssueByNumber} />
            <Route path="/users" component={Users} />
          </>
        )}

        <Route>
          <Redirect to="/" />
        </Route>

      </Switch>
    </div>
  </>
  );
}

export default App;
