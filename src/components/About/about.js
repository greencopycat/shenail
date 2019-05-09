import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>She Nail - About</title>
        </Helmet>
        <h1 className="heading1">About</h1>
      </div>
    )
  }
}

export default About;
