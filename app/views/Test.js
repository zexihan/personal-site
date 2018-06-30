import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import axios from 'axios';
import Main from '../layouts/Main';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
    console.log(`clicked ${this.state.open}`);
  }

  render() {
    return (
      <div>
        <Helmet title="Test" />
        <nav role="navigation">
          <div id="menuToggle">
            <div onClick={this.handleClick} className={this.state.open ? 'open' : 'closed'}>
              <span />
              <span />
              <span />
            </div>

            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Music;
