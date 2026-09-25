import React, { useEffect, useState } from 'react'
import Sugus from '../../../Tema02ExpresionesYPropiedades/Sugus'
import type { SugusProps } from '../../../interfaces/Sugus'
import type { PedidoType, ProductoPedido, ProductosProps } from '../types/TiendaSugus.types'
import { useSearchParams } from 'react-router'
import { useProductosStore } from '../store/Productos.store'

const KEY_LS = 'pedido'

const Productos = () => {
  const [qParams, setQParams] = useSearchParams()

  const productosState = useProductosStore((state: any) => state)
  
  const listaSugus = productosState.productos
  // const [listaSugus, setListaSugus] = useState<Array<SugusProps>>([
  //   {
  //     color: 'blue',
  //     sabor: 'piña',
  //   },
  //   {
  //     color: 'orange',
  //     sabor: 'naranja',
  //   },
  //   {
  //     color: 'red',
  //     sabor: 'fresa',
  //   },
  //   {
  //     color: 'yellow',
  //     sabor: 'limón',
  //   }
  // ])

  const [pedido, setPedido] = useState<PedidoType>(() => {
    const pedidoGuardado = localStorage.getItem(KEY_LS)
    if (pedidoGuardado) {
      return JSON.parse(pedidoGuardado)
    }
    return []
  })

  useEffect(() => {
    productosState.loadProductos()
  }, [])

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

  const sugusFiltrados = listaSugus.filter((sugus: SugusProps) => {
    return sugus.sabor.includes(qParams.get('filtro') || '')
  })

  const listaProductos = sugusFiltrados.map((sugus: SugusProps) => {
    return (
      <div key={sugus.sabor}>
        <Sugus color={sugus.color} sabor={sugus.sabor} />
        <button
          type="button"
          onClick={() => addSugusPedido(sugus.sabor)}>
            +1
        </button>
      </div>
    )
  })

  const filtro = qParams.get('filtro') || ''

  return (
    <div>
      <h3>Sugus disponibles</h3>

      <div>
        <label htmlFor="filtro">Filtrar productos:</label>
        {/* <input type="text" id="filtro" value={filtro} onInput={e => setFiltro((e.target as HTMLInputElement).value)} /> */}
        <input type="text" id="filtro" value={filtro} onInput={
          e => {
            setQParams({
              filtro: (e.target as HTMLInputElement).value
            })
          }
        } />
      </div>

      <div className='flex'>
        {listaProductos}
      </div>


    </div>
  )
}

export default Productos