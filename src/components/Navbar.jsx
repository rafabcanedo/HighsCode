import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DiscordLogo, List, X } from "phosphor-react";

import Logo from '../assets/1.jpg';

export default function Navbar() {
  const [ open, setOpen ] = useState(false);
 return(
  <div className="shadow-md w-full fixed top-0 left-0">
   <div className="md:flex items-center justify-between bg-slate-100 py-4 md:px-10 px-7">
   <img src={Logo} alt="Logo High Codes" className="w-16 h-16 cursor-pointer rounded-full" />

   <div onClick={() => setOpen(!open)} 
   className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
   >
   { open ? <X weight="light" /> : <List weight="light" /> }
   </div>
   
   <ul 
     className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}
    >
     <li className="md:ml-8 md:my-0 my-7">
      <a to="#" className="text-xl font-medium hover:text-violet-900 duration-500 cursor-pointer">
       Home
      </a>
     </li>
     <li className="md:ml-8 md:my-0 my-7">
      <a to="#" className="text-xl font-medium hover:text-violet-900 duration-500 cursor-pointer">
       About
      </a>
     </li>
     <li className="md:ml-8 md:my-0 my-7">
      <a to="#" className="text-xl font-medium hover:text-violet-900 duration-500 cursor-pointer">
       Community
      </a>
     </li>
     <div className="">
    <button 
    type="button" 
    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#40356f] shadow-md rounded-xl hover:bg-[#240041] focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2"
   >
   <div className=""><DiscordLogo size={35} weight="light" /></div>
   <span className="">Discord</span>
   </button>
   </div>
    </ul>
    </div>
  </div>
 );
}

// <List size={32} weight="light" />
// <X size={32} weight="light" />