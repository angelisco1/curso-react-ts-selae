import React, { useEffect, useMemo, useReducer, useState, type AnyActionArg } from 'react'


interface Action {
  type: string,
}

interface Position {
  posY: number,
  posX: number,
}

const reducer = (currentState: Position, action: Action) => {
  console.log('Pasa por el reducer', action)
  switch(action.type) {
    case 'ArrowRight':
      return {...currentState, posX: currentState.posX + 10}
    case 'ArrowLeft':
      return {...currentState, posX: currentState.posX - 10}
    case 'ArrowDown':
      return {...currentState, posY: currentState.posY + 10}
    case 'ArrowUp':
      return {...currentState, posY: currentState.posY - 10}
    default:
      return currentState
  }
}


const Tema09OtrosHooks = () => {
  const [position, dispatch] = useReducer<Position, any>(reducer, {posY: 100, posX: 100})
  const [nombre, setNombre] = useState<string>('Charly')
  const [apellido, setApellido] = useState<string>('Falco')

  const moverCaja = (event: KeyboardEvent) => {
    console.log(event)
    dispatch({ type: event.key })
  }

  useEffect(() => {
    window.addEventListener('keyup', moverCaja)

    return () => {
      window.removeEventListener('keyup', moverCaja)
    }
  }, [])

  /* const getNombreCompleto = () => {
    console.log('Pasa por getNombreCompleto')
    return `${nombre} ${apellido}`
  }
  const nombreCompleto = getNombreCompleto() */

  const nombreCompleto = useMemo(() => {
    console.log('Pasa por useMemo')
    return `${nombre} ${apellido}`
  }, [nombre, apellido])

  return (
    <div>
      <h2>Tema 09: Otros Hooks</h2>

      <h3>useReducer</h3>
      <div
        className='caja'
        style={{
          top: position.posY + 'px',
          left: position.posX + 'px',
        }}></div>

        <h3>useMemo</h3>
        <p>Nombre: {nombreCompleto}</p>
        <button type="button" onClick={() => setNombre('Carlos')}>Cambiar nombre</button>
    </div>
  )
}

export default Tema09OtrosHooks