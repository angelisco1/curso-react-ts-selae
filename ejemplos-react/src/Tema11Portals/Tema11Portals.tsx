import React, { useState } from 'react'
import Modal from './Modal'

const Tema11Portals = () => {
  const [modalAbierto, setModalAbierto] = useState(false)

  const toggleModalAbierto = () => {
    setModalAbierto((prev: boolean) => !prev)
  }

  return (
    <div>
      <h2>Tema 11: Portals</h2>

      <button type="button" onClick={toggleModalAbierto}>Abrir modal</button>

      {modalAbierto && <Modal onCloseModal={toggleModalAbierto}>
        <p>El modal está abierto</p>
      </Modal>}
    </div>
  )
}

export default Tema11Portals