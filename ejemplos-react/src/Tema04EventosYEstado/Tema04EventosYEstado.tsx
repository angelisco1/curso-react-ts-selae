import React, { useState } from 'react'
import Contador from './Contador'
import ContadorSinEstado from './ContadorSinEstado'

const saludar = (): void => {
  // Por aquí habría más código, y por eso la declarmos fuera del onClick de abajo
  console.log('Hola Ángel!!')
}

const Tema04EventosYEstado = () => {

  const [cuenta, setCuenta] = useState<number>(10)

  const mostrarTexto = (event: React.InputEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event)
    console.log('Texto: ' + (event.target as HTMLInputElement).value)
  }

  const decrementarCuenta = () => {
    if (cuenta > 0) {
      setCuenta(cuenta - 1)
    }
  }

  const incrementarCuenta = () => {
    setCuenta(cuenta + 1)
  }

  const cambiarCuenta = (nuevaCuenta: number) => {
    setCuenta(nuevaCuenta)
  }

  return (
    <div>
      <h2>Tema 04: eventos y estado</h2>

      <button type="button" onClick={() => alert('Hola Ángel!')}>Saludame</button>
      {/* Cuidado, que no tenemos que ejecutar las funciones, solo darle a los eventos el nombre de aquella que tiene que ejecutar React */}
      <button type="button" onClick={saludar}>Saludame en la consola</button>

      <input type="text" onInput={mostrarTexto} />
      <input type="text" onChange={mostrarTexto} />

      <Contador />

      <ContadorSinEstado
        cuenta={cuenta}
        decrementar={decrementarCuenta}
        incrementar={incrementarCuenta}
        cambiarCuenta={cambiarCuenta} />

    </div>
  )
}

export default Tema04EventosYEstado