import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './price.css';
import global from '../../assets/scss/global.module.scss';

class Price extends Component {
  render() {
    return (
      <div className={global.pageContent}>
        <Helmet>
          <title>She Nail - Price</title>
        </Helmet>
        <section className={global.section}>
          <h1 className={global.heading1}>Price</h1>
          <h2>Coming Soon...</h2>
        </section>
      </div>
    )
  }
}

export default Price;
