import { BrowserRouter } from 'react-router'
import './App.css'
import TiendaSugus from './Ejemplos/TiendaSugus/TiendaSugus'
import Tema01Componentes from './Tema01Componentes/Tema01Componentes'
import Tema02ExpresionesYPropiedades from './Tema02ExpresionesYPropiedades/Tema02ExpresionesYPropiedades'
import Tema03CondicionalesYListas from './Tema03CondicionalesYListas/Tema03CondicionalesYListas'
import Tema04EventosYEstado from './Tema04EventosYEstado/Tema04EventosYEstado'
import Tema05UseEffect from './Tema05UseEffect/Tema05UseEffect'
import Tema06Referencias from './Tema06Referencias/Tema06Referencias'
import Tema07Formularios from './Tema07Formularios/Tema07Formularios'
import Tema08UseContext from './Tema08UseContext/Tema08UseContext'
import Tema09OtrosHooks from './Tema09OtrosHooks/Tema09OtrosHooks'
import Tema10PropChildren from './Tema10PropChildren/Tema10PropChildren'
import Tema11Portals from './Tema11Portals/Tema11Portals'

function App() {
  return (
    <div>
      <h1>Curso de React con TS</h1>
      {/* <Tema01Componentes /> */}
      {/* <Tema02ExpresionesYPropiedades /> */}
      {/* <Tema03CondicionalesYListas /> */}
      {/* <Tema04EventosYEstado /> */}
      {/* <Tema05UseEffect /> */}
      {/* <Tema06Referencias /> */}
      {/* <Tema07Formularios /> */}
      {/* <Tema08UseContext /> */}
      {/* <Tema09OtrosHooks /> */}
      {/* <Tema10PropChildren /> */}
      {/* <Tema11Portals /> */}

      <BrowserRouter>
        <TiendaSugus />
      </BrowserRouter>

    </div>
  )
}

export default App
