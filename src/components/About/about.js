import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="page-content">
        <Helmet>
          <title>She Nail - About</title>
        </Helmet>
        <article>
          <h2 className="heading2">Nail Art</h2>
          <p>She Nail is a new, hip and unique concept salon focused on growing the popularity of nail art using artists trained in special Japanese nail art techniques.</p><br />
          <h2 className="heading2">Quality</h2>
          <p>The product used are 100% high-end Japanese gel and the best availabl in the market. This unique gel adheres to the natural nail with its honey-like consistency without causing any damage to the nail. The formula is extremely flexible, yet tough, and is applied to the nail just like regular nail polish. It's comfortable and even prevents nails from discoloration.</p><br />
          <h2 className="heading2">Price</h2>
          <p>Basic one color gel nails starts at $45. Nail design starts at $60 depending on the design. (Be prepared designs may take 1.5 hours and up). Gel nails typically lasts up to 3 weeks without losing color or shine.</p><br />
          <h2 className="heading2">Don't Wait</h2>
          <p>Come and make your day brighter from the inside through the power of nail art!</p>
        </article>
      </div>
    )
  }
}

export default About;
