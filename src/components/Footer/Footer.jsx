import React from 'react';
import { NavLink } from 'react-router-dom';
import playstore from '../../assets/black-playstore 1.png'
import dribble from '../../assets/icon/a1.png'
import facebook from '../../assets/icon/fb.png'
import linkedin from '../../assets/icon/linkedin.png'
import youtube from '../../assets/icon/youtube.png'
import twitter from '../../assets/icon/twitter.png'
import pinterest from '../../assets/icon/p.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-[#EDEDED] text-center py-20 '>
      <div className='container mx-auto lg:px-12 '>
      </div>
      <div className="flex flex-col space-x-6 text-[18px] text-[#464646] justify-center items-center  lg:flex-row">
        <NavLink to='/about-us'>About us</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/terms'>Terms and Conditions</NavLink>
        <NavLink to='/policy'>Privacy Policy</NavLink>
        <NavLink to='/gift-card'>Offer and Git Card</NavLink>
        <NavLink to='/contact-us'>Contact us</NavLink>
      </div>
      <div className="flex flex-col space-x-6 py-16 justify-center items-center lg:flex-row">
        <p className='text-[#025B5D] font-bold'>Download Oyebusy App</p>
        <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
          <img className='w-36 h-10' src={playstore} alt="playstore" />
        </a>
      </div>

      <div className="flex flex-col space-x-6 justify-center items-center lg:flex-row">
        <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
          <img className='w-7 h-7' src={dribble} alt="dribble" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img className='w-7 h-7' src={twitter} alt="twitter" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img className='w-7 h-7' src={facebook} alt="facebook" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img className='w-7 h-7' src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img className='w-7 h-7' src={youtube} alt="youtube" />
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <img className='w-7 h-7' src={pinterest} alt="pinterest" />
        </a>
      </div>


      <h2 className='text-[#464646] font-[600] pt-5' style={{fontFamily : 'Mulish'}}>© {currentYear} House Cleaning Expert</h2>
    </div>
  );
};

export default Footer;