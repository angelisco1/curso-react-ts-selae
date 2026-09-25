import React, { useContext } from 'react'
import { useInputField } from '../../../hooks/useInputField'
import { AuthService } from '../services/auth.service'
import { useNavigate } from 'react-router'
import { UserCtx } from '../contexts/UserCtx'

const Login = () => {
  const ctx = useContext(UserCtx)
  const [email, setEmail] = useInputField('')
  const [password, setPassword] = useInputField('')
  const navigate = useNavigate()

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const userLogin = {
      email,
      password
    }
    console.log(userLogin)

    // Petición aquí
    const user = await AuthService.login(email, password)

    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      ctx?.setUser(user)
      navigate('/productos')
      return
    }

    // Podemos aprovechar el modal del tema de Portals para mostrar un error
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="text"
            id="email"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login