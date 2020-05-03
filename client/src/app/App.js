import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import Tasks from '../Pages/Tasks';
import Projects from '../Pages/Projects';
import ProjectEdit from '../Pages/ProjectEdit';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/project/:id">
          <ProjectEdit />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
