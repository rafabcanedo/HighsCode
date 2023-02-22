import { DiscordLogo, Handshake, LockKeyOpen, Code, Atom } from 'phosphor-react';

const Home = () => {
 return(
 <div className="py-24 sm:py-32">
 <div className="h-[5rem]"></div> {/* spacer div */}

 
 <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 md:flex-row lg:px-8">
 <div className="w-full md:sticky md:top-10 md:w-[28rem]">
  <h2 class="text-lg font-semibold leading-8 tracking-tight text-[#40356f]">High's Codes</h2>
  <h1 className="text-2xl font-bold font-montserrat">
   Uma nova <span className="text-[#40356f]">comunidade</span> <br />
   que cresce a cada dia
  </h1>
  <p className="mt-6 mb-2 text-base leading-7 text-gray-600">
   Aprender e ensinar é o nosso lema, interagir e conhecer novos
   desenvolvedores é a meta.
   Precisamos criar uma união dentro da nossa comunidade de desenvolvimento
   e jogos 🚀.
   Foco, estudos e muito café ☕
  </p>
  
  <button className="relative border-2 font-medium border-violet-800 bg-transparent py-2 px-4 rounded-lg text-[#240041] transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-[#40356f] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
   Seja um membro
  </button>
  </div>

  {/* Container div in right */}
  <div className="mt-5 w-full min-w-0 flex-1 md:mt-0">
  <dl className="grid grid-cols-1 gap-y-10 gap-x-8 md:max-w-xl lg:max-w-none lg:gap-y-16">

   <div className="relative rounded-lg bg-gray-300 p-10">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
     <DiscordLogo size={28} weight="light" color="#fff" />
    </div>

    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Entre em nossa Comunidade</dt>
    <dd className="mt-2 text-base leading-7 text-gray-600">
     Nosso discord está disponível para todos. Sendo um desenvolvedor experiente ou mesmo novato. Tendo espaço para todos!
    </dd>
   </div>

   <div className="relative rounded-lg bg-gray-300 p-10">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
     <Handshake size={28} weight="light" color="#fff" />
    </div>

    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Faça Networking</dt>
    <dd className="mt-2 text-base leading-7 text-gray-600">
     Dentro da nossa comunidade o segredo de crescer é criar conexões com desenvoledores de todo o mundo.
     O seu próximo passo sempre fica mais fácil tendo um companheiro de código.
    </dd>
   </div>

   <div className="relative rounded-lg bg-gray-300 p-10">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
    <LockKeyOpen size={28} weight="light" color="#fff" />
    </div>

    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Destrave o próximo nível</dt>
    <dd className="mt-2 text-base leading-7 text-gray-600">
     Aprender a programar desde do básico te leva ao próximo nível, com nossa comunidade os grandes mares
     que nos assustam esvaziam, seus sonhos ficam mais próximos.
    </dd>
   </div>

   <div className="relative rounded-lg bg-gray-300 p-10">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
     <Atom size={28} weight="light" color="#fff" />
    </div>

    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Ajude o Próximo</dt>
    <dd className="mt-2 text-base leading-7 text-gray-600">
     Se você ja foi ajudado em algum momento durante aqueles momentos difíceis pensando que
     programação não é para você, sinta-se à vontade para ajudar os desenvoledores novos dentro
     da nossa comunidade.
    </dd>
   </div>

   <div className="relative rounded-lg bg-gray-300 p-10">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
     <Code size={28} weight="light" color="#fff" />
    </div>

    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">Participe de Projetos</dt>
    <dd className="mt-2 text-base leading-7 text-gray-600">
     Hoje em dia existem diversos projetos <span className="text-indigo-600">Open Sources</span> e você pode participar
     conosco ou até criar um projeto junto com nossos desenvolvedores da <span className="text-indigo-600">High's Code</span>.
    </dd>
   </div>
  </dl>
  </div>
  </div>

 </div>
 );
}

export default Home;