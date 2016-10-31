import React, { Component, PropTypes } from 'react';

export default class Title extends Component {
  render() {
    const { children } = this.props;

    return <h1>{children}</h1>;
  }
}

Title.propTypes = { children: PropTypes.string.isRequired };
