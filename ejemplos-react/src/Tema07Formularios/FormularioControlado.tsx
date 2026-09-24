import React, { useEffect, useState } from 'react'
import { useInputField } from '../hooks/useInputField'
import type { ErrorType } from '../interfaces/Validations'

const FormularioControlado = () => {
  // const [datosForm, setDatosForm] = useState<any>({
  //   username: '',
  //   email: '',
  //   password: ''
  // })

  // const [username, setUsername] = useState<string>('angel')
  // const [erroresUsername, setErroresUsername] = useState<Array<string>>([])

  const [username, setUsername, erroresUsername] = useInputField('charly', { minLength: 5 })

  const [email, setEmail, erroresEmail] = useInputField('', {
    pattern: '[a-z]{3,}@[a-z]{3,}\.[a-z]{2,}'
  })

  const [password, setPassword, erroresPassword] = useInputField('', {
    minLength: 8,
    withMayus: true,
    withSymbols: ['.', '_', '!', '$']
  })

  /* useEffect(() => {
    const errores = []

    if (username.length < 4) {
      errores.push('El usuario tiene que tener al menos 4 caracteres')
    }

    setErroresUsername(errores)

  }, [username]) */


  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const datos = {
      username,
      email,
      password
    }

    // Envia los datos donde haya que enviarlos
    console.log(datos)
  }

  // Aquí mejor añadir con el error un identificador para la key
  const listaErroresUsername = erroresUsername.map((err: ErrorType, pos: number) => {
    return <li key={err.key}>{err.message}</li>
  })

  const listaErroresEmail = erroresEmail.map((err: ErrorType) => {
    return <li key={err.key}>{err.message}</li>
  })

  const listaErroresPassword = erroresPassword.map((err: ErrorType) => {
    return <li key={err.key}>{err.message}</li>
  })

  return (
    <div>
      <h3>Formulario Controlado</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onInput={(e) => setUsername((e.target as HTMLInputElement).value)} />
          {listaErroresUsername.length > 0 && <ul>{listaErroresUsername}</ul>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)} />
          {listaErroresEmail.length > 0 && <ul>{listaErroresEmail}</ul>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)} />
          {listaErroresPassword.length > 0 && <ul>{listaErroresPassword}</ul>}
        </div>

        {/* <InputField label="password" type="password" value={password} onInput={setPassword} errors={erroresPassword} /> */}

        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}

export default FormularioControlado