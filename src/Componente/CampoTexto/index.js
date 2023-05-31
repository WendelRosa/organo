import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholdermodificado = `${props.placeholder}...` //frase que aparece dentro do input
    //let valor ="Wendel Rosa"

    const aoDigito = (evento) => {
      props.aoAlterado(evento.target.value) //metodo ou função que vem do formulario
    }



    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigito} required={props.obrigatorio} placeholder={placeholdermodificado}></input>
        </div>

    )

}

export default CampoTexto