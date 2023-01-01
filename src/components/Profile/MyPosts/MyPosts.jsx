import React from 'react';
import c from './MyPosts.module.sass'
import Post from './Post/Post'

// let post = [
//   {id: 1, message: 'post1', likesCount: '10'},
//   {id: 2, message: 'post2', likesCount: '20'},
//   {id: 3, message: 'post3', likesCount: '5'},
//   {id: 4, message: 'post4', likesCount: '2'},
//   {id: 5, message: 'post5', likesCount: '3'},
// ]

const MyPosts = (props) =>
{

  let postElements = props.post.map( post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/> )

  return(
  <div>
    <div>
      My posts
    </div>
    {postElements}
  </div>
  )
}

export default MyPosts