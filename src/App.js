import React, { useState } from 'react'
import './App.css';
import IssueList from './components/IssueList';
import {BrowserRouter as Router, Switch, Route, Link, Redirect}from 'react-router-dom'
import IssueByNumber from './components/IssueByNumber';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      { loggedIn && (
        <li><Link to="/issues">Issues</Link></li>
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
