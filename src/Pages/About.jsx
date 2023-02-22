import { Lightbulb, Brain, Code, Crown } from "phosphor-react";
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

   <div className="flex flex-col justify-center items-center">
   <h1 className="font-montserrat text-xl">Na comunidade <span className="text-purple-600">High's Code</span></h1>
   <h3 className="font-jost text-base text-gray-600 md:text-center">Você poderá acrescentar de alguma forma dentro do nosso Discord</h3>
   </div>
  <section className="flex fex-row justify-center w-full my-32 gap-12">
    <div className="flex flex-col gap-6">
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
     <Brain size={28} weight="light" />
    </span>
     <h2 className="mt-2 text-lg font-jost text-gray-800">Gere Valor</h2>
     <p class="line-clamp-2 mt-1 text-gray-500">
      Procure sempre somar nos projetos ativos de nossos desenvolvedores, e também sempre procure trocar conhecimentos com a comunidade.
     </p>
    </div>
    </div>

    <div className="flex flex-col gap-6">
    <div className="mx-auto flex h-48 w-full max-w-md cursor-pointer flex-col justify-center overflow-hidden rounded-lg bg-white px-5 py-0 shadow-xl ring-1 ring-gray-900/5">
    <span class="inline-flex h-9 w-9 items-center justify-center rounded-md bg-purple-100 p-1 text-purple-600">
     <Code size={28} weight="light" />
    </span>
     <h2 className="mt-2 text-lg font-jost text-gray-800">Desenvolver junto à comunidade</h2>
     <p class="line-clamp-2 mt-1 text-gray-500">
      A maioria do nosso projetos são Opens Source, então sinta-se à vontade para programar conosco ou ficar em call para
      conversar sobre tecnologia.
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
    </div>

  </section>
  </div>
 );
}
   
export default About;