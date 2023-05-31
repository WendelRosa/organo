import './ListaSuspensa.css'


const ListaSuspensa = (props) =>{
   const aoDigito= (evento)=>{
    props.aoAlterar(evento.target.value)

   }

    return(
        <div className="lista-suspensa" >
            <label>{props.label}</label>
           
            <select key={props.valor} value={props.valor} onChange={aoDigito} required={props.obrigatorio}>
            <option>{""}</option>
                {props.itens.map(item=><option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa