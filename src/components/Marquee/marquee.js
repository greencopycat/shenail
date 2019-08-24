import React, { Component } from 'react';
import './marquee.css';

const heros = require.context('./../../assets/img/marquee');

const images = [
  {src: './196.jpg', id:'001'},
  {src: './497.jpg', id:'002'},
  {src: './580.jpg', id:'003'},
  {src: './742.jpg', id:'004'},
  {src: './859.jpg', id:'005'},
  {src: './910.jpg', id:'006'},
  {src: './185.jpg', id:'007'},
  {src: './881.jpg', id:'008'},
  {src: './266.jpg', id:'009'},
  {src: './999.jpg', id:'010'},
  {src: './412.jpg', id:'011'},
  {src: './995.jpg', id:'012'},
  {src: './415.jpg', id:'013'},
  {src: './315.jpg', id:'014'},
  {src: './246.jpg', id:'015'},
  {src: './153.jpg', id:'016'},
  {src: './572.jpg', id:'017'},
  {src: './121.jpg', id:'018'},
  {src: './483.jpg', id:'019'},
  {src: './666.jpg', id:'020'},
  {src: './540.jpg', id:'021'},
  {src: './669.jpg', id:'022'},
  {src: './o_1.jpg', id:'023'},
  {src: './o_5.jpg', id:'024'},
  {src: './o_7.jpg', id:'025'},
  {src: './o_16.jpg', id:'026'},
  {src: './o_19.jpg', id:'027'},
  {src: './o_20.jpg', id:'028'},
  {src: './o_23.jpg', id:'029'},
  {src: './o_27.jpg', id:'030'},
  {src: './o_28.jpg', id:'031'},
  {src: './o_31.jpg', id:'032'},
  {src: './o_33.jpg', id:'033'},
  {src: './o_34.jpg', id:'034'},
  {src: './o_37.jpg', id:'035'},
  {src: './o_38.jpg', id:'036'},
  {src: './o_44.jpg', id:'037'},
  {src: './o_45.jpg', id:'038'},
  {src: './o_46.jpg', id:'039'},
  {src: './o_47.jpg', id:'040'},
  {src: './o_50.jpg', id:'041'},
  {src: './o_51.jpg', id:'042'},
  {src: './o_52.jpg', id:'043'},
  {src: './o_67.jpg', id:'044'},
  {src: './o_70.jpg', id:'045'},
  {src: './o_71.jpg', id:'046'},
  {src: './o_76.jpg', id:'047'},
  {src: './o_77.jpg', id:'048'},
  {src: './o_82.jpg', id:'049'},
  {src: './o_83.jpg', id:'050'},
  {src: './o_86.jpg', id:'051'},
  {src: './o_91.jpg', id:'052'},
  {src: './o_95.jpg', id:'053'},
  {src: './o_96.jpg', id:'054'},
  {src: './o_97.jpg', id:'055'},
  {src: './o_98.jpg', id:'056'},
  {src: './o_99.jpg', id:'057'},
  {src: './o_100.jpg', id:'058'}
];

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
