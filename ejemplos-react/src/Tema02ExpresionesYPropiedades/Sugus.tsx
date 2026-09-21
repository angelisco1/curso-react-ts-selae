import React, { type JSX } from 'react'
import './Sugus.css'
import { styles as SugusStyles } from './Sugus.styles'

interface SugusProps {
  color: string,
  sabor: string
}

/* const Sugus = ({sabor = 'limón', color = 'yellow'}: SugusProps): JSX.Element => {
  const estilos = {
    backgroundColor: color
  }

  return (
    <div
      className="envoltorio"
      style={estilos}>
      <p className="letras">{sabor}</p>
    </div>
  )
} */

const Sugus = (props: SugusProps): JSX.Element => {
  console.log(props)
  // props.color = 'lightblue'

  // const color: string = 'yellow'
  // const sabor: string = 'limón'

  // const color = props.color
  // const sabor = props.sabor
  const { color, sabor } = props

  const estilos = {
    ...SugusStyles.envoltorio,
    backgroundColor: color
  }

  // Si queremos utilizar todo con CSS normal, hay que descomentar este bloque, comentar el return que hay debajo, y comentar a linea de "...SugusStyles.envoltorio", que hay en la constante de estilos.
  /* return (
    <div
      className="envoltorio"
      style={estilos}>
      <p className="letras">{sabor}</p>
    </div>
  ) */

  return (
    <div
      style={estilos}>
      <p className="letras">{sabor}</p>
    </div>
  )
}

export default Sugus