import React from 'react'
import { FaInstagram, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

const community = () => {
 return (
 <section>
 <div className="flex items-center justify-center mb-8">
 <h1 className="text-xl font-jost">Como anda a nossa <span className="text-2xl font-montserrat text-violet-600">Comunidade</span> nas Redes?</h1>
 </div>
 <div className="flex flex-row items-center justify-center gap-8">
 <div className="flex flex-row gap-2">
 <div className="cursor-pointer">
  <FaInstagram size={30} color="#7c3aed" />
 </div>
 <div>
 <p className="font-jost text-base">Intagram</p>
 <p className="font-normal text-gray-600 text-sm">+5 Mil Seguidores</p>
 </div>
 </div>

 <div className="flex flex-row gap-2">
 <div className="cursor-pointer">
  <FaTwitter size={30} color="#7c3aed" />
 </div>
 <div>
  <p className="font-jost text-base">Twitter</p>
  <p className="font-normal text-gray-600 text-sm">+8 Mil Seguidores</p>
 </div>
 </div>

 <div className="flex flex-row gap-2">
 <div className="cursor-pointer">
  <FaGithub size={30} color="#7c3aed" />
 </div>
 <div>
  <p className="font-jost text-base">Github</p>
  <p className="font-normal text-gray-600 text-sm">+10 Projetos</p>
 </div>
 </div>

 <div className="flex flex-row gap-2">
 <div className="cursor-pointer">
  <FaDiscord size={30} color="#7c3aed" />
 </div>
 <div>
  <p className="font-jost text-base">Discord</p>
  <p className="font-normal text-gray-600 text-sm">+2 Mil Desenvolvedores</p>
 </div>
 </div>
 </div>

 </section>
 );
}

export default community;