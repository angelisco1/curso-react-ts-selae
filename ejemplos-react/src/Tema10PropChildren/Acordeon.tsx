import React, { useState } from 'react'

interface AcordeonProps {
  titulo: string,
  children?: any
}

// Los estilos están en el index.css
const Acordeon = ({titulo, children}: AcordeonProps) => {
  const [estaAbierto, setEstaAbierto] = useState(true)

  console.log(children)

  const toggleAbierto = () => {
    setEstaAbierto(!estaAbierto)
  }

  const slotTitulo = children ?? children.find((elem: any) => elem.slot === 'titulo')
  const slotBody = children ?? children.find((elem: any) => !elem.slot || elem.slot === 'body')

  return (
    <div className={estaAbierto ? 'acordeon abierto' : 'acordeon cerrado'}>
      <div className='header' onClick={toggleAbierto}>
        {/* {titulo} */}
        {slotTitulo}
      </div>
      <div className='body'>
        {slotBody}
        {/* {children ? children : 'Contenido'} */}
      </div>
    </div>
  )
}

export default Acordeon