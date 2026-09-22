import React from 'react'

const ContadorSinEstado = (props: any) => {
  const { cuenta, incrementar, decrementar, cambiarCuenta } = props 

  const handleChangeCuenta = (event: React.InputEvent<HTMLInputElement>) => {
    const value: string = (event.target as HTMLInputElement).value
    cambiarCuenta(Number(value))
  }

  return (
    <div>
      <button type="button" onClick={decrementar}>-</button>
      <span>{cuenta}</span>
      <button type="button" onClick={incrementar}>+</button>

      <hr />
      <input id="inputCuentaSinEstado" type="number" value={cuenta} onInput={handleChangeCuenta} />
    </div>
  )
}

export default ContadorSinEstado