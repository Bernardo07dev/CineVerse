import { useState, useEffect } from 'react'
import LogoPng from './assets/images/CineVerse-LogoPNG.png'
import CampoTexto from './components/CampoTexto'
import axios from 'axios'
import BgCine from '/images/bg-cine.png';
import CardMovie from './components/CardMovie'


const CineVerse = () => {
  const [Filme, SetFilme] = useState("");
  const [Movie, SetMovie] = useState([]);
  const [Submit, SetSubmit] = useState(false);
  const [Animate, setAnimate] = useState(false);

  useEffect(() => {
    if (Submit) {
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [Submit]);

  const GetFilme = async(e) => {
    if (e.key === 'Enter') {
      try {
          SetSubmit(false);
          setAnimate(false);
          SetMovie([]);
          const response = await axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=${Filme}`);
          SetMovie(response.data.description);
          setTimeout(() => setAnimate(true), 100);
          SetSubmit(true);
      } catch (error) {
        alert("Deu erro");
      }
    }
  };

  return (
    <main className="min-h-screen bg-cover pb-32"
      style={{ backgroundImage: `url(${BgCine})` }}
    >
      <header className='w-full fixed sm:bg-[#fff0] sm:backdrop-blur-none backdrop-blur-lg mb-22 z-10 py-12 px-4 md:px-12'>
            <img className='w-[10em]' src={LogoPng} alt="CineVerse Logo"></img>
      </header>
      <div className="top-0 z-50 flex flex-col items-center text-white w-full pt-42">
        <div className='flex flex-row items-center justify-center sm:mx-0 mx-4 mb-4'>
            <h1 className='text-2xl text-center sm:text-2xl md:text-4xl text-[#e3e3e3] font-semibold'>Bem Vindo ao
              <span class="font-bold ml-2 bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
                CineVerse
              </span>
            </h1>
        </div>
        
        <div className='w-full flex flex-col justify-center items-center'>
          <CampoTexto className={`sm:w-full w-[90%] transition-all duration-1000 ease-in-out text-[0.9em] font-light rounded-2xl border-[1px] border-[#5454548a] backdrop-blur-md px-6 py-6 focus:outline-none bg-[#1515151e] mb-8 ${Submit ? "md:w-[79%]" : "md:w-[40%]"}`} submit={GetFilme} change={(e) => SetFilme(e.target.value)} placeholder="Digite o nome do filme que você quer encontrar:"></CampoTexto>
          <CardMovie Movie={Movie} Submit={Submit} Animate={Animate}></CardMovie>
        </div>
      </div>
    </main>
  )
}

export default CineVerse
