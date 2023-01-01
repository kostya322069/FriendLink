import React from 'react';
import c from './ProfileInfo.module.sass'

const ProfileInfo = () =>{
  return(
  <div className={c.profile__info}>
    <div className={c.profile__avatarBG}>
      Your avatar
    </div>    
    <div className={c.profile__details}>
      <div className={c.profile__avatar}></div>
      <div>Info</div>
    </div>
  </div>
  )
}
export default ProfileInfo