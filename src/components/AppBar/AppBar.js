import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';
import Header from './Header';

const AppBar = ({ text }) => (
  <header className="AppBar">
    <Header text={text} />
    <nav className='Nav'>
      <NavLink exact to={'/'} className='NavLink' activeClassName='NavLink_active' >Quotation</NavLink>
      <NavLink to={'/ping'} className='NavLink' activeClassName='NavLink_active' >PingPage</NavLink>
    </nav>
  </header>
);

export default AppBar;
