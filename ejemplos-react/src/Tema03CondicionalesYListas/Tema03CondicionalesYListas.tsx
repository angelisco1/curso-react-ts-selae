import React, { type JSX } from 'react'
import type { SugusProps } from '../interfaces/Sugus'
import Sugus from '../Tema02ExpresionesYPropiedades/Sugus'

const Tema03CondicionalesYListas = () => {

  const estaLogueado: boolean = false
  const hayProductosEnLaCesta: boolean = true
  const listaSugus: Array<SugusProps> = [
    {
      color: 'blue',
      sabor: 'piña',
    },
    {
      color: 'orange',
      sabor: 'naranja',
    },
    {
      color: 'red',
      sabor: 'fresa',
    },
    {
      color: 'yellow',
      sabor: 'limón',
    }
  ]

  let boton = <button type="button">Logout</button>
  if (!estaLogueado) {
    boton = <button type="button">Login</button>
  }

  const sugusComponents: Array<JSX.Element> = listaSugus.map((sugus: SugusProps, pos: number) => <Sugus key={pos} color={sugus.color} sabor={sugus.sabor} />)

  return (
    <div>
      <h2>Tema 03: condicionales y listas</h2>

      {boton}
      {estaLogueado ? <button type="button">Logout</button> : <button type="button">Login</button>}

      {hayProductosEnLaCesta ? <p>Cesta: 3 productos</p> : null}
      {hayProductosEnLaCesta && <p>Cesta: 3 productos</p>}

      {sugusComponents}

    </div>
  )
}

export default Tema03CondicionalesYListas