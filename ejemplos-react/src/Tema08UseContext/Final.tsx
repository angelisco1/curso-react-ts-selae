import React, { useContext } from 'react'
import { LanguageCtx } from './contexts/LanguageCtx'
import { traducir } from './utils/Traductor'

const Final = () => {
  const lang = useContext(LanguageCtx)
  console.log(lang)

  return (
    <div>
      <h4>Componente final</h4>

      <p>{traducir('bienvenido', lang)}...</p>

    </div>
  )
}

export default Final