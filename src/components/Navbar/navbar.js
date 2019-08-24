import React, { Component } from 'react';
import './navbar.css';

import { Tribar } from '../Icons/icons';
import { NavLink } from 'react-router-dom';

const menu = require('../../assets/content/en/menu.json');

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
            {
              menu.items.map(item=>(
                <li key={item.key} className="item"><NavLink to={item.path} exact activeClassName="active" onClick={this.closeMenu}>{item.label}</NavLink></li>
              ))
            }
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
