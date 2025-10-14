const CampoTexto = (props) =>{
    return(
        <input type="text" onKeyDown={props.submit} onChange={props.change} placeholder={props.placeholder} className={props.className}>    
        </input>
    )
}

export default CampoTexto;