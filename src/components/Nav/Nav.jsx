import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Nav.module.sass'

const NavBar = () =>{
  return(
    <nav className={c.nav}>
    <div><NavLink to='/profile'>Profile</NavLink></div>
    <div><NavLink to='/dialogs'>Messages</NavLink></div>
    <div><NavLink to='/news'>News</NavLink></div>
    <div><NavLink to='/music'>Music</NavLink></div>
    <div><NavLink to='/settings'>Settings</NavLink></div>
</nav>
  )
}

export default NavBar