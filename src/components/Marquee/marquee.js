import React, { Component } from 'react';
import './marquee.css';

const heros = require.context('./../../assets/img/marquee');

const marquee = require('../../assets/content/marquee.json');
const images = marquee.images;

export class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive,
      index: this.props.index
    }
  }
  componentDidMount() {
    let isActive = this.state.isActive === "true";
    let $elem = this.refs.slide;
    if(isActive) {
      $elem.classList.toggle("active");
    }
    this.interval = setInterval(this.nextSlide.bind(this,$elem), 7000)
  }
  render() {
    return (
      <div className="slide" ref="slide" style={{ backgroundImage: "url(" + heros(images[this.state.index].src) + ")" }}></div>
    )
  }
  nextSlide($elem) {
    $elem.classList.toggle("active");
    let ind = this.state.index;
    if($elem.classList.contains("active")) {
      this.setState({
        index: (parseInt(ind) + 2) % images.length
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: {
        slide1: "0",
        slide2: "1"
      }
    }
  }
  render() {
    return (
      <div id="hero">
        <div className="hero-images">
          <Slide index={this.state.slides.slide1} isActive="true" />
          <Slide index={this.state.slides.slide2} isActive="false" />
        </div>
      </div>
    )
  }
}

export default Marquee;
