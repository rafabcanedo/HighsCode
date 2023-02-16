import Dev from '../assets/4.jpg';

const About = () => {
 return(
  <section className="py-32">
   <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
    <div>
    {/*<img src={Dev} alt="Foto Coding" />*/}
    </div>
   </div>
   <div>
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
 );
}
   
export default About;