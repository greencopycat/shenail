import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './specialty.css';
import global from '../../assets/scss/global.module.scss';

class Specialty extends Component {
  render() {
    return (
      <div className={global.pageContent}>
        <Helmet>
          <title>She Nail - Specialty</title>
        </Helmet>
        <section className={global.section}>
          <h1 className={global.heading1}>Specialty</h1>
          <ul className="specialties">
            <li>Callus Removal</li>
            <li>Classic Manicure</li>
            <li>Classic Pedicure</li>
            <li>Eyebrow Services</li>
            <li>Eyelash Services</li>
            <li>Foot Massage</li>
            <li>French Tip Full Set</li>
            <li>Gel Full Set</li>
            <li>Gel Nail Removal</li>
            <li>Nail Art</li>
            <li>Nail Art Removal</li>
            <li>Polish Change</li>
            <li>Nail Repair</li>
            <li>Paraffin Wax Treatments</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Specialty;
