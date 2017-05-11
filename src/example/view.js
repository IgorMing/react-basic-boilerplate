import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Section from '../components/section';
import Button from '../components/button';

import * as actions from './duck';

class Example extends Component {
  render () {
    const { props: {
        example: { count },
        addCounter,
        minusCounter,
      },
    } = this;

    return (
      <Section>
        <h2>The value selected is {count}</h2>
        <Button onClick={minusCounter}>Minus</Button>
        <Button onClick={addCounter}>Add</Button>
      </Section>
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
