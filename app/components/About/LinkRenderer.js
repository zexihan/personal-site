/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export type Props = {
  children: number | string | React.Element | Array<any>,
  href: string,
};

const LinkRenderer = (props: Props) => {
  if (props.href.match(/^(https?:)?\/\//)) {
    return (
      <a href={props.href}>
        {props.children}
      </a>
    );
  }
  return (
    <Link to={props.href}>{props.children}</Link>
  );
};

export default LinkRenderer;
