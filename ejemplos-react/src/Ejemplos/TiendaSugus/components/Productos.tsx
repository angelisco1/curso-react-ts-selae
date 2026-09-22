import React from 'react'
import Sugus from '../../../Tema02ExpresionesYPropiedades/Sugus'
import type { SugusProps } from '../../../interfaces/Sugus'
import type { ProductosProps } from '../types/TiendaSugus.types'

const Productos = ({listaSugus, addSugusPedido}: ProductosProps) => {

  const listaProductos = listaSugus.map((sugus: SugusProps) => {
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

  return (
    <div>
      <h3>Sugus disponibles</h3>

      <div className='flex'>
        {listaProductos}
      </div>


    </div>
  )
}

export default Productos