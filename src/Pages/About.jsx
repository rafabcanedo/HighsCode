import { Lightbulb, Crown } from "phosphor-react";
import Dev from '../assets/4.jpg';

const About = () => {
 return(
  <div>
  <section className="container mx-auto py-40 flex gap-20">
   <div className="relative">
    <div className="h-full rounded-lg">
    <img src={Dev} alt="Foto Coding" width="800" height="800" className="rounded-xl" />
    </div>
   </div>
   <div className="my-auto flex flex-col gap-3">
     <h2 className="text-2xl font-semibold">O que seria <span className="text-violet-900">High's Code</span>?</h2>
     <h4 className="text-lg text-gray-600 font-medium">Por que participar dessa comunidade?</h4>
    
    <div className="flex mt-4">
    <span className="text-base text-neutral-900">
     High's Code é uma comunidade do 
     <a href="https://discord.com/" target="_blank" className="text-indigo-600"> Discord</a>
      com o intuito de crescer com outros desenvolvedores de todas as partes do mundo. <br />
      Com diversão e horas de ensinos você acaba conhecendo pessoas, fazendo amizades, fortificando Networking 
      e desenvolvendo projetos Open Sources com a nossa comunidade.<br />
      Além disso, temos diversos tipos de aulas gratuitas via call com nossos desenvolvedores. Aulas do básico
      ao avançado com espaço para dúvidas e comentários.<br />
      As aulas são marcadas e seguem um cronograma que está disponível para todos.
      Por último temos canais de texto e voz para os usuários se encontrarem e dividir seus conhecimentos 24 horas.
    </span>
    </div>
   </div>
  </section>

  <section className="flex fex-row gap-">
    <div className="mx-auto flex h-48 w-full max-w-md cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-white px-5 py-0 shadow-xl ring-1 ring-gray-900/5">
    <span class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-purple-100 p-1 text-purple-600">
     <Lightbulb size={28} weight="light" />
    </span>
     <h2 className="mt-2 text-lg font-jost text-gray-800">Compartilhe suas Ideias</h2>
     <p class="line-clamp-2 mt-1 text-gray-500">
      Sempre estamos abertos a novas ideias de projetos, ideias sobre contribuição da comunidade. Somos uma comunidade e precisamos que todos
      os desenvolvedor contribua.
     </p>
    </div>

    <div className="mx-auto flex h-48 w-full max-w-md cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-white px-5 py-0 shadow-xl ring-1 ring-gray-900/5">
    <span class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-purple-100 p-1 text-purple-600">
     <Crown size={28} weight="light" />
    </span>
     <h2 className="mt-2 text-lg font-jost text-gray-800">Complete Desafios</h2>
     <p class="line-clamp-2 mt-1 text-gray-500">
      Conforme o crescimento da High's Code, vimos a necessidade de trazer desafios para tornar os estudos mais divertidos.
     </p>
    </div>

  </section>
  </div>
 );
}
   
export default About;