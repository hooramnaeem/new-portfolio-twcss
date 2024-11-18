
"use client"
import Link from 'next/link';
import {FaUserTie , FaHome, FaInfoCircle,FaEnvelope, FaBars,FaEnvelopeOpenText } from 'react-icons/fa';


import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white fixed w-full z-10">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold"><span className="font-extrabold text-5xl text-orange-500" >C</span>ode<span className="font-extrabold text-3xl text-purple-400" >C</span>anvas</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            <FaBars />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8`}>
          <li className=' text-white hover:text-pink-500 hover:animate-bounce'><Link href="/"><FaHome className="inline text-xl mr-1 text-purple-700" /> Home</Link></li>
          <li className=' text-white hover:text-pink-500 hover:animate-bounce'><Link href="/about"><FaUserTie  className="inline text-xl mr-1  text-purple-700" /> About</Link></li>
          
          <li className=' text-white hover:text-pink-500 hover:animate-bounce'><Link href="/contact"><FaEnvelopeOpenText className="inline text-xl mr-1  text-purple-700" /> Contact </Link></li>
          {/* <li className=' text-white'><button className="border-2 border-white px-7 py-1  text-red-500">Sign Up</button></li> */}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <li><Link href="/"><FaHome className="inline text-xl mr-1" /> Home</Link></li>
          <li><Link href="/about"><FaInfoCircle className="inline text-xl mr-1" /> About</Link></li>
         
          <li><Link href="/contact"><FaEnvelope className="inline text-xl mr-1" /> Contact</Link></li>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
