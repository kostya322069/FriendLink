import React from 'react';
import c from './Post.module.sass'

const Post = (props) =>{
  return(
    <div className={c.post}>
      <img src='https://w7.pngwing.com/pngs/263/201/png-transparent-computer-icons-avatar-admission-miscellaneous-logo-silhouette.png'/>
      <p>{props.message}</p>
      <p>{props.id}</p>
      <p>{props.likesCount}</p>
    </div> 
)   
}

export default Post