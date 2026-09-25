import React from 'react'
import type { PedidoProps, ProductoPedido } from '../types/TiendaSugus.types'

const PRECIO_SUGUS: number = 0.25

const Pedido = ({pedido, comprar}: PedidoProps) => {
  let totalPedido = 0

  const itemsPedido = pedido.map((itemPedido: ProductoPedido) => {
    const precioItem = itemPedido.cantidad * PRECIO_SUGUS
    totalPedido += precioItem
    
    return <li key={itemPedido.sabor}>
        {itemPedido.cantidad} de {itemPedido.sabor} = {precioItem}€
      </li>
  })


  return (
    <div>
      <h3>Resumen pedido</h3>

      <ul>
        {itemsPedido}
      </ul>

      <p>Total: {totalPedido}€</p>
      <button type="button" onClick={comprar}>Comprar</button>
    </div>
  )
}

export default Pedido