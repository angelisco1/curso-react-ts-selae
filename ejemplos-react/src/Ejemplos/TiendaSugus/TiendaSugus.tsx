import React, { useEffect, useState } from 'react'
import Productos from './pages/Productos'
import type { UserType, PedidoType, ProductoPedido } from './types/TiendaSugus.types'
import type { SugusProps } from '../../interfaces/Sugus'
import Pedido from './pages/Pedido'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/Login'
import MisPedidos from './pages/MisPedidos'
import { UserCtx } from './contexts/UserCtx'
import DetallePedido from './pages/DetallePedido'
import Error404 from './pages/Error404'



const TiendaSugus = () => {
  const [user, setUser] = useState<UserType | null>(() => {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }
    return null
  })

  // const clearPedido = () => {
  //   setPedido([])
  // }

  return (
    <div>
      <UserCtx.Provider value={{user, setUser}}>

        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/productos" />} />

          <Route path="/productos" Component={Productos} />
          <Route path="/login" Component={Login} />
          {user && (
            <>
              {/* <Route path="/pedidos" Component={MisPedidos} />
              <Route path="/pedidos/:pedidoId" Component={DetallePedido} /> */}
              
              <Route path="/pedidos" Component={MisPedidos}>
                <Route path=":pedidoId" Component={DetallePedido} />
              </Route>
            </>
          )}

          <Route path="*" Component={Error404} />
        </Routes>

      </UserCtx.Provider>
      
      {/* <Productos
        listaSugus={listaSugus}
        addSugusPedido={addSugusPedido} />

      <Pedido pedido={pedido} comprar={clearPedido} /> */}

    </div>
  )
}

export default TiendaSugus