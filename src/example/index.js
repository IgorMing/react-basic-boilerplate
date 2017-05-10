import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from './ducks';

class Example extends Component {
  render () {
    const { props: {
        example: { count },
        addCounter,
        minusCounter,
      },
    } = this;

    return (
      <div>
        <h2>The value selected is {count}</h2>
        <button onClick={minusCounter}>Minus</button>
        <button onClick={addCounter}>Add</button>
      </div>
    );
  }
}

Example.propTypes = {
  example: PropTypes.shape({
    addCounter: PropTypes.func,
    minusCounter: PropTypes.func,
  }),
};

/**
* Convert application state to props.
* @param {Object} state - Application state
* @returns {Object} Updated props
*/
const mapStateToProps = state => ({ example: state.example });
const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Example);
