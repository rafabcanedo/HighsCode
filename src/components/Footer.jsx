import { Code, InstagramLogo, LinkedinLogo, TwitchLogo } from 'phosphor-react';
import LogoNav from '../assets/2.jpg';

export default function Footer() {
 return(
  <footer className="mt-16 p-16 bg-zinc-100 relative left-0 w-full">
   <div className="w-3/4 m-8 flex justify-between items-center">
    <img src={LogoNav} alt="Logo Navbar" className="w-16 h-16 cursor-pointer rounded-full" />

    <div className="flex flex-row justify-center items-end">
    <span className="text-base font-normal">
     Desenvolvido por <a href="https://www.instagram.com/canedodev/" className="text-violet-900 font-semibold"> CanedoDev</a>
    </span>
    <div className="ml-2">
     <Code size={25} weight="light" color="#000" />
     </div>
    </div>

    <div>
     <span className="text-sm text-black underline decoration-violet-500">
      Me siga nas Redes
     </span>
     <div className="flex flex-row gap-2 mt-2">
     <a href="https://www.twitch.tv/canedopriv" target="_blank">
     <TwitchLogo size={25} weight="light" />
     </a>

     <a href="https://www.instagram.com/canedodev/" target="_blank">
     <InstagramLogo size={25} weight="light" />
     </a>

     <a href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/" target="_blank">
     <LinkedinLogo size={25} weight="light" />
     </a>
    </div>
    
    </div>
   </div>
  </footer>
 );
}