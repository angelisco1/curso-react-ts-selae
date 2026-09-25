import React, { useContext, useEffect, useState } from 'react'
import { UserCtx } from '../contexts/UserCtx'
import { OrdersService } from '../services/orders.service'
import { Link, Outlet } from 'react-router'

const MisPedidos = () => {
  const ctx = useContext(UserCtx)
  const [orders, setOrders] = useState([])

  useEffect(() => {

    const loadOrders = async () => {
      const myOrders = await OrdersService.getOrders(ctx?.user?.id!)
      setOrders(myOrders)
    }

    loadOrders()

  }, [])

  const listaPedidos = orders.map((order: any, pos: number) => {

    const totalProductos = order.products.reduce((acc: number, prod: any) => {
      return acc + prod.quantity
    }, 0)

    return <li key={order.id}>
      {pos + 1}: Pedido con {totalProductos} productos
      <Link to={"/pedidos/" + order.id}>Ver productos</Link>
    </li>
  })

  return (
    <div>
      <h2>Mis pedidos</h2>
      
      <ul>
        {listaPedidos}
      </ul>
    
      <Outlet />
    
    </div>
  )
}

export default MisPedidos