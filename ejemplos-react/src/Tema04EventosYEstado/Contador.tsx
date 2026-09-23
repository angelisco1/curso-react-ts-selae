import React, { useState } from 'react'

const Contador = () => {

  // [estadoActual, fnParaCambiarEstado]
  // const estado = useState<number>(10)
  // console.log(estado)
  let [cuenta, setCuenta] = useState<number>(10)

  const decrementarCuenta = () => {
    if (cuenta > 0) {
      
      // Para cambiar el estado siempre se usa el setter
      // cuenta = cuenta - 1
      //setCuenta(cuenta - 1)

      // React agrupa en lotes los cambios de estado
      //setCuenta(cuenta - 1)
      //setCuenta(cuenta - 1)
      //setCuenta(cuenta - 1)

      // Si necesitamos actualizar el estado varias veces de una, entonces hay que utilizar la función como se muestra aquí
      setCuenta((prevCuenta: number) => prevCuenta - 1)
      setCuenta((prevCuenta: number) => prevCuenta - 1)
      setCuenta((prevCuenta: number) => prevCuenta - 1)
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