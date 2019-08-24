import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styles from './gallery.module.scss';
import global from '../../assets/scss/global.module.scss';

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
      <div className={global.pageContent}>
        <Helmet>
          <title>She Nail - Gallery</title>
        </Helmet>
        <section className={global.section}>
          <h1 className={global.heading1}>Gallery</h1>
          <Filmstrip drawer={this.state.drawer} view={this.view.bind(this)}/>
          <Viewer display={this.state.display}/>
        </section>
      </div>
    )
  }
  view(filename) {
    this.setState({
      display: images(filename)
    })
  }
}

const Viewer = ((props) => <div className={styles.photoViewer}><img alt="img" src={props.display}/></div>);

class Filmstrip extends Component {
  render() {
    return (
      <div className={styles.filmstrip}>
        <ul className={styles.fsRow}>
          {
            this.props.drawer.map((img,i)=><li key={i} className={styles.fsItem} onClick={this.props.view.bind(null,img)}><img src={images(img)} alt="img" /></li>)
          }
        </ul>
      </div>
    )
  }
}

export default Gallery;
