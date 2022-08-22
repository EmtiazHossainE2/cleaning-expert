import React, { useState } from 'react';
import logo from '../../assets/Group 7077.png'
import { NavLink,Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='container mx-auto flex items-center relative h-20 px-2 md:px-12 bg-zinc-300'>
      <div className="mr-auto md:hidden">
        <BiMenu className="text-3xl" onClick={() => setOpen(!open)} />
      </div>
      <Link to='/' className='flex justify-between items-center '>
        <img className='w-10' src={logo} alt="logo" />
        <div className='flex flex-col justify-center items-center font-bold'>
          <span className='text-[12px]'>Cleaning</span>
          <span className='text-[12px]'>Expert</span>
        </div>
      </Link>
      <div className={`md:ml-auto flex flex-col w-full gap-1 absolute md:static md:flex-row md:items-center md:space-x-8 text-lg md:w-auto top-16 left-0 px-4 bg-zinc-300 md:bg-transparent z-50 pb-5 lg:pt-5 ${open ? "" : "hidden md:flex"}`}>
        <NavLink className='py-1' to='/'>Home</NavLink>
        <NavLink className='py-1' to='/pest-control'>Pest Control</NavLink>
        <NavLink className='py-1' to='/home-cleaning'>Home Cleaning</NavLink>
        <NavLink className='py-1 text-2xl' to='/Cart'><BsCartCheck /></NavLink>
        <NavLink className='py-1 text-[#FF7A00] font-semibold' to='/quotes'>Free Quotes</NavLink>
      </div>
    </div>
  );
};

export default Navbar;