import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './home.css';

import Marquee from '../Marquee/marquee';

class Home extends Component {
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>She Nail - Home</title>
        </Helmet>
        <Marquee />
      </div>
    )
  }
}

export default Home;
