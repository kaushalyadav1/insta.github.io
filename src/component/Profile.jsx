import React from 'react'
import { Link } from 'react-router-dom'
import ds from "./profile.module.css"

const Profile = () => {
  return (
    <ul id={ds.pro}>
        <li> <Link to='/'>posts</Link> </li>
        <li> <Link to='/reels'>reels</Link> </li>
        <li> <Link to='/tags'>tagged</Link> </li>
    </ul>
  )
}

export default Profile