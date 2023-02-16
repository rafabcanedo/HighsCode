import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiscordLogo, List, X } from "phosphor-react";

import Logo from '../assets/1.jpg';

export default function Navbar() {
 
 return(
  <div>
   <nav className="p-5 bg-zinc-100 shoadow md:flex md:items-center md:justify-between">
   <div className="flex justify-between items-center">
    <img src={Logo} alt="Logo High Codes" className="w-16 h-16 cursor-pointer rounded-full" />

   <span className="text-3xl cursor-pointer mx-2 md:hidden block">
    <List size={32} weight="light" />
   </span>
   </div>

   <ul 
    className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-zinc-100 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
   >
    <li className="mx-4 my-6 md:my-0">
     <a to="#" className="text-xl font-medium hover:text-violet-900 duration-500 cursor-pointer">
      Home
     </a>
    </li>
    <li className="mx-4 my-6 md:my-0">
     <a to="#" className="text-xl font-medium hover:text-violet-900 duration-500 cursor-pointer">
      About
     </a>
    </li>
    <li className="mx-4 my-6 md:my-0">
     <a to="#" className="text-xl font-medium hover:text-violet-900 duration-500 cursor-pointer">
      Community
     </a>
    </li>
   </ul>

  <div className="">
  <button 
   type="button" 
   className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#40356f] shadow-md rounded-xl hover:bg-[#240041] focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2"
  >
  <div className=""><DiscordLogo size={35} weight="light" /></div>
  <span className="">Discord</span>
  </button>
  </div>
  </nav>
  </div>
 );
}

// <List size={32} weight="light" />
// <X size={32} weight="light" />