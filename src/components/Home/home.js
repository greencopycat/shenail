import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './home.css';
import global from '../../assets/scss/global.module.scss';

import Marquee from '../Marquee/marquee';

class Home extends Component {
  render() {
    return (
      <div className={`${global.pageContent} ${global.fullBleed}`}>
        <Helmet>
          <title>She Nail - Home</title>
        </Helmet>
        <section className={global.section}>
          <Marquee />
        </section>
      </div>
    )
  }
}

export default Home;
