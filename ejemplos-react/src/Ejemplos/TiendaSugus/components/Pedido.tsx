import React from 'react'
import type { PedidoProps, ProductoPedido } from '../types/TiendaSugus.types'

const Pedido = ({pedido}: PedidoProps) => {

  const itemsPedido = pedido.map((itemPedido: ProductoPedido) => {
    return <li></li>
  })


  return (
    <div>
      <h3>Resumen pedido</h3>

      <ul>
        {itemsPedido}
      </ul>

    </div>
  )
}

export default Pedido