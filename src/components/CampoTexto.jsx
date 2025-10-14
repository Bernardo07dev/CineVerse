const CampoTexto = (props) =>{
    return(
        <input type="text" onKeyDown={props.submit} onChange={props.change} placeholder={props.placeholder} className="mt-6 w-[46%] text-md font-light rounded-2xl border-[1px] border-[#5454548a] backdrop-blur-sm px-8 py-6 focus:outline-none bg-[#1515152a]">    
        </input>
    )
}

export default CampoTexto;