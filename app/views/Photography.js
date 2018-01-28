import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import LinkRenderer from '../components/About/LinkRenderer';
import markdown from '../data/about.md';

const About = () => (
  <Main>
    <Helmet title="Photography" />
    <article className="post" id="photography">
      <header>
        <div className="title">
          <h2><Link to="/photography">Photography</Link></h2>
          <p>EDIT</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
      />
    </article>
  </Main>
);

export default About;
