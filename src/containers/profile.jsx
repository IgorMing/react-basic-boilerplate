import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTest } from '../actions';
import Title from '../components/title';

class App extends Component {
  componentWillMount() {
    this.props.getTest();
  }

  render() {
    return(
      <Title>Test</Title>
    );
  }
}

/**
* Convert application state to props.
* @param {Object} state - Application state
* @returns {Object} Updated props
*/
const mapStateToProps = (state) => {
  return { app: state.app };
};

export default connect(mapStateToProps, { getTest })(App);
