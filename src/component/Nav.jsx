import React from 'react'
import Menu from './Menu'
import ds from './nav.module.css'
import pic from "../images/v.jpeg"

const Nav = () => {
  return (
    <section id={ds.navbar}>

      <div className={ds.image}>
        <img src={pic} alt="" />
      </div>
      
      <div> <Menu></Menu> </div>

    </section>
  )
}

export default Nav