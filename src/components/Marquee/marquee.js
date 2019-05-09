import React, { Component } from 'react';
import './marquee.css';

const heros = require.context('./../../assets/img/marquee', false);

export class Marquee extends Component {
  render() {
    return (
      <div id="hero">
        <div className="hero-images">
        <img src={heros('./o_1.jpg')} alt="Hero" />
        </div>
        <div className="hero-indicators">
        </div>
      </div>
    )
  }
}

export default Marquee;
