import React from 'react'
import { Link } from 'react-router'

const Error404 = () => {
  return (
    <div>
      <h2>Page not found: Error 404</h2>
      <Link to="/">Ir a inicio</Link>
    </div>
  )
}

export default Error404