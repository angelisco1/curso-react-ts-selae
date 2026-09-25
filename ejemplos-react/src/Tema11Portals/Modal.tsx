import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({children, onCloseModal}: any) => {
  return createPortal(
    <div>
      <div className='modal'>
        <div className="header">
          <button type="button" onClick={onCloseModal}>X</button>
        </div>
        <div className="body">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('portal')!
  )
}

export default Modal