import React, { useEffect, useState } from 'react'
import Productos from './components/Productos'
import type { PedidoType, ProductoPedido } from './types/TiendaSugus.types'
import type { SugusProps } from '../../interfaces/Sugus'
import Pedido from './components/Pedido'

const KEY_LS = 'pedido'

const TiendaSugus = () => {
  const [listaSugus, setListaSugus] = useState<Array<SugusProps>>([
    {
      color: 'blue',
      sabor: 'piña',
    },
    {
      color: 'orange',
      sabor: 'naranja',
    },
    {
      color: 'red',
      sabor: 'fresa',
    },
    {
      color: 'yellow',
      sabor: 'limón',
    }
  ]) 

  const [pedido, setPedido] = useState<PedidoType>(() => {
    const pedidoGuardado = localStorage.getItem(KEY_LS)
    if (pedidoGuardado) {
      return JSON.parse(pedidoGuardado)
    }
    return []
  })

  useEffect(() => {
    const pedidoStr = JSON.stringify(pedido)
    localStorage.setItem(KEY_LS, pedidoStr)
  }, [pedido])


  const addSugusPedido = (sabor: string) => {

    const estaElSugus = pedido.find((productoPedido: ProductoPedido) => {
      if (productoPedido.sabor === sabor) {
        return true
      }
      return false
    })

    if (!estaElSugus) {
      const sugusToAdd: ProductoPedido = {
        sabor: sabor,
        cantidad: 1
      }

      // [] -> [sugus1] -> [sugus1, sugus2]
      const pedidoActualizado = [...pedido, sugusToAdd] 
      setPedido(pedidoActualizado)

      return
    }

    const pedidoActualizado = pedido.map((productoPedido: ProductoPedido) => {
      if (productoPedido.sabor === sabor) {
        productoPedido.cantidad += 1
      }
      return productoPedido
    })

    setPedido(pedidoActualizado)
  }

  const clearPedido = () => {
    setPedido([])
  }

  return (
    <div>
      <h2>Tienda de sugus</h2>

      <Productos
        listaSugus={listaSugus}
        addSugusPedido={addSugusPedido} />

      <Pedido pedido={pedido} comprar={clearPedido} />

    </div>
  )
}

export default TiendaSugus