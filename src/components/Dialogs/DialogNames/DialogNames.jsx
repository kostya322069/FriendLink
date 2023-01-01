import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './../Dialogs.module.sass'

const DialogNames = (props) =>{
  let path = '/dialogs/' + props.id
  return(
  <div className={c.dialogs__item}><NavLink to={path}>{props.name}</NavLink></div>
  )
}

export default DialogsNames