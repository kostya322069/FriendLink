import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.sass'

const DialogNames = (props) =>{
  let path = '/dialogs/' + props.id
  return(
  <div className={c.dialogs__item}><NavLink to={path}>{props.name}</NavLink></div>
  )
}

const Message = (props) =>{
  let path = '/dialogs/' + props.id
  return(
    <div className={c.dialogs__message}>{props.message}</div>
  )
}



const Dialogs = (props) =>{
  let MessagesElements = props.MessagesData.map(message => <Message id={message.id} message={message.message}/>);

  let DialogsElements = props.DialogsData.map(dialog => <DialogNames id={dialog.id} name={dialog.name}/>)
  return(
    <div className={c.dialogs}> 
      <div className={c.dialogs__items}>
        {DialogsElements}
      </div>
      <div className={c.dialogs__messages}>
        {MessagesElements}
      </div>
    </div>
  )
}



export default Dialogs