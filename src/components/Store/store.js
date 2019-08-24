import React, { Component } from 'react';
import Helmet from 'react-helmet';
import * as styles from './store.module.scss';
import * as global from '../../assets/scss/global.module.scss';

import qr from '../../assets/img/qr.jpg';

class Store extends Component {
  render() {
    return (
      <div className={global.pageContent}>
        <Helmet>
          <title>She Nails - Store</title>
        </Helmet>
        <section className={global.section}>
          <h2 className="heading2">Location</h2>
          <iframe 
            className={styles.gmap} 
            frameBorder="0" 
            style={{
              border: "2px solid",
              backgroundColor: "rgba(255,255,255,.8)"
            }} 
            title="Google Map"
            src="https://www.google.com/maps/embed/v1/place?q=3205%20Alma%20Drive%20%23413%2C%20Plano%2C%20TX%2C%20USA&key=AIzaSyDbtfBcI_4VBITgt9qb4ne-jkcIgnFfJ5o" allowFullScreen>
          </iframe>
        </section>
        <section className={global.section}>
          <h2 className="heading2">Store Hours</h2>
          <ul className={styles.storeHours}>
            <li>
              <div><strong>Mon - Thu</strong></div>
              <div className={styles.hours}><span>10:00am - 07:00pm</span></div>
            </li>
            <li>
              <div><strong>Fri - Sat</strong></div>
              <div className={styles.hours}><span>09:30am - 07:00pm</span></div>
            </li>
            <li>
              <div><strong>Sun</strong></div>
              <div className={styles.hours}><span>11:30am - 07:00pm</span></div>
            </li>
          </ul>
        </section>
        <section className={global.section}>
          <h2 className="heading2">Store Information</h2>
          <div className={styles.storeInfo}>
            <div>3205 Alma Dr Ste 413, Plano, TX 75025</div>
            <div><a href="tel:+19498910770">(949) 891-0770</a></div>
          </div>
        </section>
        <section className={global.section}>
          <div className={styles.qrWrapper}>
            <img src={qr} alt="QR Code" />
          </div>
        </section>
      </div>
    )
  }
}

export default Store;
