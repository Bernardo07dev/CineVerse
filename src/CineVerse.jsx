import { useState, useEffect } from 'react'
import LogoPng from './assets/images/CineVerse-LogoPNG.png'
import CampoTexto from './components/CampoTexto'
import axios from 'axios'

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
        // Reseta os estados para preparar para a nova busca e animação
        SetSubmit(false);
        setAnimate(false);
        SetMovie([]); // Limpa os filmes antigos e mostra "Carregando..."

        const response = await axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=${Filme}`);
        SetMovie(response.data.description);
        SetSubmit(true);
      } catch (error) {
        alert("Deu erro");
      }
    }
  };

  return (
    <main className="min-h-screen bg-[url('public/images/bg-cine.png')] bg-cover pb-32 px-[5%] md:px-0">
      <div className='w-full fixed mb-22 z-10 py-12 md:px-12'>
            <img className='w-[10em]' src={LogoPng} alt="CineVerse Logo"></img>
      </div>
      <div className="top-0 z-50 flex flex-col items-center text-white w-full pt-42">
        <div className='flex flex-row items-center justify-center mb-4'>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-[#e3e3e3] font-semibold'>Olá, Bem Vindo ao
              <span class="font-bold ml-2 bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
                CineVerse
              </span>
            </h1>
        </div>
        
        <div className='w-full flex flex-col justify-center items-center'>
          <CampoTexto className={`w-full transition-all duration-1000 ease-in-out text-[0.9em] font-light rounded-2xl border-[1px] border-[#5454548a] backdrop-blur-md px-8 py-6 focus:outline-none bg-[#1515151e] mb-8 ${Submit ? "md:w-[79%]" : "md:w-[40%]"}`} submit={GetFilme} change={(e) => SetFilme(e.target.value)} placeholder="Digite o nome do filme que você quer encontrar:"></CampoTexto>
          <div className='w-[80%] flex flex-row justify-center items-baseline'>
            {Movie === 0 ? (
              Submit && <p>Carregando...</p>
            ):(
              Movie.slice(0, 4).map((item, index)=> (
                <div
                  key={item['#IMDB_ID']}
                  className={`
                    rounded-2xl border-[1px] border-[#5454548a] h-full flex flex-col items-center justify-center w-[25%] mx-2 p-8 bg-gradient-to-b from-[#1D1A14] to-[#000000]
                    transition-all ease-in-out transform
                    ${Animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
                  }
                  style={{ transitionDuration: `${500 + index * 100}ms` }}
                >
                  <img className='h-[300px] rounded-sm items-center mb-4' src={item['#IMG_POSTER']}></img>
                  <div>
                    <h1 className='w-full py-2 text-xl text-left font-semibold'>{item['#TITLE']}</h1>
                    <p className='w-full text-sm'><strong>Elenco:</strong> {item['#ACTORS']}</p>
                    <p className='w-full text-sm'><strong>Ano:</strong> {item['#YEAR']}</p>
                    <p className='w-full text-sm mb-4'><strong>AKA:</strong> {item['#AKA']}</p>
                    <button className='bg-[#fffffff0] underline cursor-pointer text-gray-950 font-medium text-sm py-3 px-4 rounded-md' onClick={() => window.open(item['#IMDB_URL'], '_blank')}>Ver Mais no  IMDB</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default CineVerse
