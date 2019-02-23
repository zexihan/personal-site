import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Portfolio/Cell';
import data from '../data/portfolio';

const Portfolio = () => (
  <Main>
    <Helmet title="Portfolio" />
    <article className="post" id="portfolio">
      <header>
        <div className="title">
          <h2><Link to="/portfolio">Portfolio</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map(project => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Portfolio;
