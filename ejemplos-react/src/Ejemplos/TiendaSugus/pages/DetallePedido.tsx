import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { OrdersService } from '../services/orders.service'

const DetallePedido = () => {
  const params = useParams()
  console.log(params)
  const [order, setOrder] = useState(null)

  // Como ya teniamos los datos en MisPedidos, podriamos sacar de ahí el pedido y pasarlo a este componente
  useEffect(() => {
    const loadOrder = async () => {
      const orderId = Number(params.pedidoId)
      const order = await OrdersService.getOrder(orderId)
      setOrder(order)
    }

    loadOrder()
  }, [params.pedidoId])


  return (
    <div>
      <h2>Detalle Pedido</h2>

      
      <pre>{JSON.stringify(order, null, 2)}</pre>
      

    </div>
  )
}

export default DetallePedido