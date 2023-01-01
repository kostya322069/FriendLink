import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './../Dialogs.module.sass'

const Message = (props) =>{
  let path = '/dialogs/' + props.id
  return(
    <div className={c.dialogs__message}>{props.message}</div>
  )
}


export default Message