import React, { useState } from 'react'
import Intermedio from './Intermedio'
import { LanguageCtx } from './contexts/LanguageCtx'

const Tema08UseContext = () => {
  const [language, setLanguage] = useState<string>('es')


  return (
    <div>
      <h2>Tema 08: useContext</h2>

      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">ES</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>

      <p>Lenguaje seleccionado: {language}</p>


      <LanguageCtx.Provider value={language}>
        <Intermedio />
      </LanguageCtx.Provider>


    </div>
  )
}

export default Tema08UseContext