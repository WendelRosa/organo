
import Banner from './Componente/Banner';
import Formulario from './Componente/Formulario';
import { useState } from 'react'
import Time from './Componente/Time';


function App() {
  const [colabsCadastrados, setColabsCadastrados] = useState([])
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const cadastrarColaborador = (colab) => {

    setColabsCadastrados([...colabsCadastrados, colab])
    console.log(colabsCadastrados)
  }



  return (

    <div className='App' >
      <Banner />
      <Formulario time = {times.map(time=> time.nome)} aoColabCadastrado={colab => cadastrarColaborador(colab)} />
      {times.map(time=>{
        return <Time colaborador={colabsCadastrados.filter(e=> e.Time===time.nome )} key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />    
        
        
        
        
      })}
      
    </div>
  );
}

export default App;
