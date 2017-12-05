/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export type Props = {
  label: string,
  handleClick: Function,
  active: Object<boolean>,
};

class CategoryButton extends Component {
  props: Props;

  handleClick = () => {
    this.props.handleClick(this.props.label);
  }

  render() {
    return (
      <button
        className={`skillbutton ${this.props.active[this.props.label] ? 'skillbutton-active' : ''}`}
        type="button"
        onClick={this.handleClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default CategoryButton;
