/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = courses => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.unversity < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

type Props = { data?: Array<{
  title?: string,
  number?: string,
  link?: string,
  univerity?: string,
}> };

function Courses(props: Props) {
  return (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Courses</h3>
    </div>
    <ul className="course-list">
      {getRows(props.data)}
    </ul>
  </div>
);
}

Courses.defaultProps = {
  data: [],
};

export default Courses;
