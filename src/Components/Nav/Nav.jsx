import React from 'react';
import './nav.css';
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{RiServiceLine} from 'react-icons/ri'

import{BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={()=> setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a> 
      <a href="#Services" onClick={()=> setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''} ><RiServiceLine/></a>

      <a href="#Contact" onClick={()=> setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
  
    </nav>
  )
}

export default Nav