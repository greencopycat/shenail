import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './gallery.css';

class Gallery extends Component {
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>She Nail - Gallery</title>
        </Helmet>
        <h1 className="heading1">Gallery</h1>
      </div>
    )
  }
}

export default Gallery;
