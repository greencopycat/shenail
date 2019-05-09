import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './price.css';

class Price extends Component {
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>She Nail - Price</title>
        </Helmet>
        <h1 className="heading1">Price</h1>
      </div>
    )
  }
}

export default Price;
