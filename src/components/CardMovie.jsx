const CardMovie = ({ Movie, Submit, Animate }) => {
    return(
        <div className='sm:w-[80%] w-[90%] flex flex-col md:flex-row justify-center items-baseline'>
            {Submit && Movie.length === 0 ? (
              <p className="text-xl text-white">Carregando...</p>
            ):(
              Movie.slice(0, 4).map((item, index)=> (
                <div
                  key={item['#IMDB_ID']}
                  className={`
                    rounded-2xl border-[1px] border-[#5454548a] h-full flex flex-col items-center justify-center w-full md:w-[25%] mb-8 md:mx-2 p-8 bg-gradient-to-b from-[#1D1A14] to-[#000000]
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
    )
}

export default CardMovie;