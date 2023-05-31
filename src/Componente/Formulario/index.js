import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import { useState } from 'react'
import "./Formulario.css"
const Formulario = (props) => {



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [Time, setTime] = useState('')




    const aoSalvar = (evento) => {
        evento.preventDefault()
      
        const colaborador = {
            nome,
            cargo,
            imagem,
            Time
        }

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');

        props.aoColabCadastrado(colaborador)

    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Name" placeholder="Digite seu nome" />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa valor={Time} aoAlterar={valor => setTime(valor)} obrigatorio={true} label="Time" itens={props.time} />
                <Botao>
                    Criar Card
                </Botao>



            </form>
        </section>
    )
}
export default Formulario