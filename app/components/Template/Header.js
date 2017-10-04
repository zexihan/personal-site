import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">MICHAEL D&apos;ANGELO</Link>
      {routes.filter(l => !l.index).map(l => (
            <Link to={l.path} className="navbar-item">{l.label}</Link>
        ))}
      {window.admin ? <Link to="/admin" className="navbar-item is-right">Admin</Link> : null}
    </div>
    <div className="navbar-end is-right">
      {window.id ? <Link to="/logout" className="navbar-item is-right">Logout</Link> : null}
    </div>
  </nav>
);

export default Header;
