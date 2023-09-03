import React from 'react';
import './footer.css';
import {GrInstagram} from 'react-icons/gr';

const Footer = () => {
  return (
    <>
    <footer>
      <a href="#" className='footer_logo'>Shruthi Varadarajan</a>

      <ul className='permalinks'>
        {/* <li><a href="#">Home</a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/shruvarad/?igshid=ZDdkNTZiNTM%3D" target='blank'><GrInstagram/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shruthi Varadarajan</small>
      </div>
    </footer>
    </>
  )
}

export default Footer
