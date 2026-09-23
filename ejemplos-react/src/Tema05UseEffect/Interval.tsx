import React, { useEffect, useState } from 'react'

const Interval = () => {
  const [num, setNum] = useState<number>(0)
  const [nombre, setNombre] = useState<string>('Charly')

  console.log("Se renderiza el componente")

  /* setInterval(() => {
    console.log("Dentro del setInterval")
    setNum(num + 1)
  }, 2000) */

  /* useEffect(() => {
    console.log("Dentro del useEffect")
    
    setTimeout(() => {
      console.log("Dentro del setTimeout 1")
      document.title = num + "segundos"
      setNum(num + 1)
    }, 1000)
  })

  useEffect(() => {
    console.log("Dentro del useEffect")
    
    setTimeout(() => {
      console.log("Dentro del setTimeout 2")
      alert('Empezamos...')
    }, 1000)
  }, []) */

  setTimeout(() => {
    console.log("Dentro del setTimeout 1")
    setNum(num + 5)
  }, 5000)

  useEffect(() => {
    console.log("Dentro del useEffect 1")
    document.title = num + " segundos"
  }, [num])

  useEffect(() => {
    console.log("Dentro del useEffect 2")
    alert('Empezamos...')
  }, [])


  const renombrar = () => {
    if (nombre === 'Charly') {
      setNombre('Carlos')
    } else {
      setNombre('Charly')
    }
  }

  return (
    <div>
      <p>{nombre} lleva {num} segundos conectado</p>
      <button type="button" onClick={renombrar}>Renombrar</button>
    </div>
  )
}

export default Interval