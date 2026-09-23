import React, { useRef } from 'react'

const FormularioNoControlado = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const datos = {
      username: usernameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }

    // Validamos los campos
    if (datos.password?.length! < 8) {
      alert('La contraseña debe tener al menos 8 caracteres')
    }

    // Hacemos la petición a donde toque
    console.log(datos)
  }

  return (
    <div>
      <h3>Formulario NO Controlado</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default FormularioNoControlado