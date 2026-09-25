import React, { useContext } from 'react'
import { Link } from 'react-router'
import { UserCtx } from '../contexts/UserCtx'

const Navbar = () => {
  const ctx = useContext(UserCtx)

  const logout = () => {
    localStorage.removeItem('user')
    ctx?.setUser(null)
  }

  return (
    <div>
      <h2>Tienda de sugus</h2>
      <Link to="/productos">Productos</Link>
      
      {/* La "<>" es igual que poner "<React.Fragment>" */}
      {!ctx?.user ? <Link to="/login">Login</Link> : (
        <>
          <Link to="/pedidos">Mis pedidos</Link>
          <button type="button" onClick={logout}>Logout</button>
        </>
      )}
    </div>
  )
}

export default Navbar