/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';

export type Props = { data: Array<{
  label: string,
  value: string | number,
  link?: string,
}> };

class Table extends Component {
  props: Props;

  getRows() {
    return this.props.data.map(pair => (
      <TableRow
        key={pair.label}
        label={pair.label}
        value={pair.value}
        link={pair.link}
      />
    ));
  }

  render() {
    return (
      <table>
        <tbody>
          {this.getRows()}
        </tbody>
      </table>
    );
  }
}

export default Table;
