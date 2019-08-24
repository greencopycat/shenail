import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './gallery.css';

const images = require.context('./../../assets/img/filmstrip', false, /\.(png|jp?g|svg)$/);


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: images.keys(),
      display: null
    }
  }
  componentDidMount() {
    this.setState({
      display: images(images.keys()[0])
    })
  }
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>She Nail - Gallery</title>
        </Helmet>
        <h1 className="heading1">Gallery</h1>
        <Filmstrip drawer={this.state.drawer} view={this.view.bind(this)}/>
        <Viewer display={this.state.display}/>
      </div>
    )
  }
  view(filename) {
    this.setState({
      display: images(filename)
    })
  }
}

const Viewer = ((props) => <div className="photo-viewer"><img alt="img" src={props.display}/></div>);

class Filmstrip extends Component {
  render() {
    return (
      <div className="filmstrip">
        <ul className="fs-row">
          {
            this.props.drawer.map((img,i)=><li key={i} className="fs-item" onClick={this.props.view.bind(null,img)}><img src={images(img)} alt="img" /></li>)
          }
        </ul>
      </div>
    )
  }
}

export default Gallery;
