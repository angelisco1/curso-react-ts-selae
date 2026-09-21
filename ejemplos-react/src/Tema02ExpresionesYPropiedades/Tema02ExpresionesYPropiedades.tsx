import React from 'react'
import Sugus from './Sugus'

const Tema02ExpresionesYPropiedades = () => {
  const usuarioLogueado: boolean = false

  const sugusPinya = {
    color: 'blue',
    sabor: 'piña',
    cantidad: 3
  }

  const sugusFresa = {
    cantidad: 4
  }

  return (
    <div>
      <h2>Tema 02: Expresiones y Propiedades</h2>
      
      {/* Para probar el sugus con valores por defecto, hay que ir al archivo de Sugus.tsx comentar la función que tenemos ahora mismo, y descomentar la que está comentada encima */}
      {/* <Sugus /> */}

      <Sugus color="yellow" sabor="limón" />
      <Sugus color="red" sabor="fresa" />
      <Sugus color="orange" sabor="naranja" />

      <Sugus
        color={sugusPinya.color}
        sabor={sugusPinya.sabor} />


      {usuarioLogueado ? <p>Has añadido al carrito un total de {sugusPinya.cantidad + sugusFresa.cantidad} sugus</p> : <p>Logueate para comprar</p>}

    </div>
  )
}

export default Tema02ExpresionesYPropiedades