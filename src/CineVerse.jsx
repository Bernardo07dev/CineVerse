import { useState } from 'react'
import Logo from './assets/icons/CineVerse-Logo.svg'
import LogoPng from './assets/images/CineVerse-LogoPNG.png'
import CampoTexto from './components/CampoTexto'





const CineVerse = () => {
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
        <p className='text-md text-[#dededea8]'>Encontre dados do seu filme favorito totalmente atualizados</p>
        <CampoTexto placeholder="Digite o nome do filme aqui:"></CampoTexto>
      </div>
    </main>
  )
}

export default CineVerse
