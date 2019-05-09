import React, { Component } from 'react';
import './pagenotfound.css';

export class PageNotFound extends Component {
  render() {
    return (
      <div className="page-content">
        <h1 className="heading1">404</h1>
        <h2 className="heading2">Page Not Found</h2>
        <p>Please check your url and try again.</p>
      </div>
    )
  }
}

export default PageNotFound;
