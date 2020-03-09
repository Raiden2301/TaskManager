import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import AppLayout from '../shared/AppLayout';

import { getData } from '../actions/CommonActions';

class App extends React.Component {

  componentDidMount() {
    this.props.getData({}, 'GET_EMPLOYEES');
    this.props.getData({}, 'GET_TASKS');
    this.props.getData({}, 'GET_PROJECTS');
  }

  render() {
    console.log("App: ", this.props);
    return (
      <div className="App">
        <AppLayout />
      </div>
    );
  }
}

const mapSateToProps = (state, ownProps) => ({
  employeeObj: state.employeeObj,
  taskObj: state.taskObj,
  projetObj: state.projetObj
});

const mapDispatchToProps = {
  getData
};


export default connect(mapSateToProps, mapDispatchToProps)(App);
