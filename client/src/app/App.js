import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import Tasks from '../Pages/Tasks';
import Projects from '../Pages/Projects';
import ProjectEdit from '../Pages/ProjectEdit';

import './App.css';


const App = (props) => {
  let isLoggedIn = localStorage.getItem('loggedIn')
  console.log("Aici", isLoggedIn)
  if (isLoggedIn === 'true') {
    return (
      <React.Fragment>
        <div className="App">
          < Switch >
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/project/:id">
              <ProjectEdit />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch >
        </div >
      </React.Fragment>
    )
  } else {
    return (
      <div className="App">
        <Route path="/login">
          <LoginPage />
        </Route>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  loginObj: state.loginObj
});

const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
