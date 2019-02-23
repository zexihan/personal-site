import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zexi Han</h2>
        <p><a href="zexihan@outlook.com">zexihan@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Zexi. I like building things.
            I am a <a href="https://www.khoury.northeastern.edu/program/data-science-ms/">Northeastern Data Science</a> graduate, 
            <a href="https://english.bupt.edu.cn/"> BUPT </a>and<a href="https://www.qmul.ac.uk/"> QMUL </a> Alumni.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Zexi Han <Link to="/">zexihan.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
