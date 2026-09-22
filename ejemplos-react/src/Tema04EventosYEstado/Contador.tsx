import React, { useState } from 'react'

const Contador = () => {

  // [estadoActual, fnParaCambiarEstado]
  // const estado = useState<number>(10)
  // console.log(estado)
  let [cuenta, setCuenta] = useState<number>(10)

  const decrementarCuenta = () => {
    if (cuenta > 0) {
      // cuenta = cuenta - 1
      setCuenta(cuenta - 1)
    }
  }

  const cambiarCuenta = (event: React.InputEvent<HTMLInputElement>) => {
    const value: string = (event.target as HTMLInputElement).value
    setCuenta(Number(value))
  }

  return (
    <div>
      <button type="button" onClick={decrementarCuenta}>-</button>
      <span>{cuenta}</span>
      <button type="button" onClick={() => setCuenta(cuenta + 1)}>+</button>

      <hr />
      <input type="number" onInput={cambiarCuenta} value={cuenta} />
    </div>
  )
}

export default Contador