import { useState} from 'react'
import Logo from './assets/icons/CineVerse-Logo.svg'
import LogoPng from './assets/images/CineVerse-LogoPNG.png'
import CampoTexto from './components/CampoTexto'
import axios from 'axios';
import React, { Fragment } from 'react';

const CineVerse = () => {
  const [Filme, SetFilme] = useState("");
  const [Movie, SetMovie] = useState([]);

  for (let i = 0; i < 5; i++){
    console.log(i)
  }



  const GetFilme = async(e) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=${Filme}`);
        console.log(response.data.description);
        // Atualize o estado para armazenar todos os filmes
        SetMovie(response.data.description);
      } catch (error) {
        alert("Deu bosta");
      }
    }
  };

  return (
    <main>
      <div className='w-full bg-[#151515] py-4 px-8 border-b border-b-[#2f2f2f]'>
            <img className='w-[10%]' src={Logo} alt="CineVerse Logo"></img>
      </div>
      <div className="flex flex-col items-center justify-center text-white min-h-screen w-full bg-[url('src/assets/images/bg-cine.png')] bg-contain">
        <div className='flex flex-row items-center justify-center'>
            <h1 className='text-4xl text-[#e3e3e3] font-semibold'>Olá, Bem Vindo ao</h1>
            <img className='w-[22%]' src={LogoPng} alt="CineVerse Logo"></img>
        </div>
        <p className='mt-[-5px] text-md text-[#dededea8]'>Encontre dados do seu filme favorito totalmente atualizados</p>
        <CampoTexto submit={GetFilme} change={(e) => SetFilme(e.target.value)} placeholder="Digite o nome do filme aqui:"></CampoTexto>
        <div className='flex flex-row'>
          {Movie === 0 ? (
            <p>Carregando...</p>
          ):(
            Movie.slice(0, 3).map((item )=> (
              <div className="px-4 transition-opacity duration-1000 ease-in ease-out" key={item['#IMDB_ID']}>
                <img className='w-[200px] ' src={item['#IMG_POSTER']}></img>
                <p>Nome Do Filme: {item['#TITLE']}</p>
                <p>Conhecido Como: {item['#AKA']}</p>
                <p>Atores Principais: {item['#ACTORS']}</p>
                <p>Ano: {item['#YEAR']}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}

export default CineVerse
