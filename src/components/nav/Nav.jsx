import React from 'react';
import './nav.css';
import {HiHome} from 'react-icons/hi';
import {FaUser} from 'react-icons/fa';
import {BsBookFill} from 'react-icons/bs';
import {FaUserGraduate} from 'react-icons/fa';
import {MdContactPhone} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav]= useState('#')
  return (
    <>
      <nav>
        <a href="#" onClick={() =>setActiveNav('#')} className={ activeNav==="#" ?'active' : ''}><HiHome /></a>
        <a href="#about" onClick={() =>setActiveNav('#about')} className={ activeNav==="#about" ?'active' : ''} ><FaUser /></a>
        <a href="#experience" onClick={() =>setActiveNav('#experience')} className={ activeNav==="#experience" ?'active' : ''}><BsBookFill /></a>
        <a href="#qualification" onClick={() =>setActiveNav('#qualification')} className={ activeNav==="#qualification" ?'active' : ''}><FaUserGraduate /></a>
        <a href="#contact" onClick={() =>setActiveNav('#contact')} className={ activeNav==="#contact" ?'active' : ''}><MdContactPhone /></a>
      </nav>
    </>
  )
}

export default Nav
