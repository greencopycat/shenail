import React, { Component } from 'react';
import './navbar.css';

import { Tribar } from '../Icons/icons';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnActive: false
    }
  }
  render() {
    return (
      <nav id="navbar">
        <NavLink to="/" exact className="logo">She Nail</NavLink>
        <div className="navitems">
          <Tribar expand={this.state.btnActive} toggle={this.toggle}/>
          <ul className="itemlist">
            <li className="item"><NavLink to="/" exact activeClassName="active" onClick={this.closeMenu}>Home</NavLink></li>
            <li className="item"><NavLink to="/about" exact activeClassName="active" onClick={this.closeMenu}>About</NavLink></li>
            <li className="item"><NavLink to="/specialty" exact activeClassName="active" onClick={this.closeMenu}>Specialty</NavLink></li>
            <li className="item"><NavLink to="/price" exact activeClassName="active" onClick={this.closeMenu}>Price</NavLink></li>
            <li className="item"><NavLink to="/gallery" exact activeClassName="active" onClick={this.closeMenu}>Gallery</NavLink></li>
            <li className="item"><NavLink to="/policy" exact activeClassName="active" onClick={this.closeMenu}>Policy</NavLink></li>
            <li className="item"><NavLink to="/store" exact activeClassName="active" onClick={this.closeMenu}>Store</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
  toggle = (props) => {
    this.setState({
      btnActive: !this.state.btnActive
    });
  }
  closeMenu = () => {
    this.setState({
      btnActive: false
    })
  }
}
export default Navbar;
