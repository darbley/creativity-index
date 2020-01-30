import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './style.scss';


class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
    )
  }
}
export default Navbar;