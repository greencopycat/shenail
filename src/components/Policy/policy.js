import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './policy.css';
import global from '../../assets/scss/global.module.scss';

class Policy extends Component {
  render() {
    return (
      <div className={global.pageContent}>
        <Helmet>
          <title>She Nail - Policy</title>
        </Helmet>
        <section className={global.section}>
          <h1 className={global.heading1}>Policy</h1>
          <h2>Coming soon...</h2>
        </section>
      </div>
    )
  }
}

export default Policy;
