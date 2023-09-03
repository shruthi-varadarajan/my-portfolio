import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <>  
        <div className="header__socials">
            <a href="https://www.linkedin.com" target= "__blank"> <FaLinkedin /> </a>
            <a href="https://github.com/shruthi-varadarajan?tab=repositories" target="__blank"> <BsGithub /></a>
            <a href=""></a>

        </div>
    </>
  )
}

export default HeaderSocials
