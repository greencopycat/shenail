import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './store.css';

import qr from '../../assets/img/qr.jpg';

class Store extends Component {
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>She Nails - Store</title>
        </Helmet>
        <h2 className="heading2">Location</h2>
        <iframe width="100%" height="450" frameBorder="0" style={{border:0}} title="Google Map"
src="https://www.google.com/maps/embed/v1/place?q=3205%20Alma%20Drive%20%23413%2C%20Plano%2C%20TX%2C%20USA&key=AIzaSyDbtfBcI_4VBITgt9qb4ne-jkcIgnFfJ5o" allowFullScreen>
        </iframe>
        <h2 className="heading2">Store Hours</h2>
        <ul className="storeHours">
          <li><strong className="grid1">Mon - Thu</strong><span className="grid2">10:00am - 07:00pm</span></li>
          <li><strong className="grid1">Fri - Sat</strong><span className="grid2">09:30am - 07:00pm</span></li>
          <li><strong className="grid1">Sun</strong><span className="grid2">11:30am - 07:00pm</span></li>
        </ul>
        <h2 className="heading2">Store Information</h2>
        <div>3205 Alma Dr Ste 413, Plano, TX 75025</div>
        <div><a href="tel:+19498910770">(949) 891-0770</a></div>
        <div className="qr-wrapper">
          <img src={qr} alt="QR Code" />
        </div>
      </div>
    )
  }
}

export default Store;
