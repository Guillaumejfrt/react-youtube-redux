import React from 'react';
import { Link } from 'react-router-dom';
import VideoSelected from '../containers/video_selected';

const About = () => {
  return (
    <div className="app">
      <div>
        <Link to="">Home</Link> | <strong>About</strong>
      </div>
      <div>
        This is a React Router + Redux boilerplate from Le Wagon.
      </div>
    </div>
  );
};

export default About;
