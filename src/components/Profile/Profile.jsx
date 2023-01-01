import React from 'react';
import c from './Profile.module.sass'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) =>{
  return(
  <div className={c.profile}>
    <ProfileInfo />
    <MyPosts post={props.post}/>
  </div>
  )
}

export default Profile