import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleBoolean } from './ducks';

class Example extends Component {
  render () {
    const {
      props: {
        example: { isOk },
        toggleBoolean
      }
    } = this;

    return (
      <div>
        <button onClick={toggleBoolean}>Click me!</button>
      </div>
    );
  }
}

/**
* Convert application state to props.
* @param {Object} state - Application state
* @returns {Object} Updated props
*/
const mapStateToProps = state => ({ example: state.example });
const mapDispatchToProps = { toggleBoolean };

export default connect(mapStateToProps, mapDispatchToProps)(Example);
