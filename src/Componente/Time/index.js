import React from 'react'
import "./time.css"
import Colaborador from '../Colaborador'

const Time = ({ nome, corSecundaria, corPrimaria, colaborador }) => {
  return (
    (colaborador.length> 0) && <section className='time' style={{ backgroundColor: corSecundaria, }}>
      <h3 stule={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className='colaboradores'>
        {colaborador.map(e => {
          return (
            <Colaborador
              key={e.name}
              nome={e.nome}
              cargo={e.cargo}
              imagem={e.imagem}
              time={e.Time}

            />)
        }

        )
        }
      </div>
    </section>
  )
}

export default Time