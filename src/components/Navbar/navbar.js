import React, { Component } from 'react';
import './navbar.css';

import { Tribar } from '../Icons/icons';
import { NavLink, Redirect } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <NavLink to="/" exact className="logo">She Nail</NavLink>
        <div className="navitems">
          <Tribar />
          <ul className="itemlist">
            <li className="item"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li className="item"><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
            <li className="item"><NavLink to="/specialty" exact activeClassName="active">Specialty</NavLink></li>
            <li className="item"><NavLink to="/price" exact activeClassName="active">Price</NavLink></li>
            <li className="item"><NavLink to="/gallery" exact activeClassName="active">Gallery</NavLink></li>
            <li className="item"><NavLink to="/policy" exact activeClassName="active">Policy</NavLink></li>
            <li className="item"><NavLink to="/store" exact activeClassName="active">Store</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;
