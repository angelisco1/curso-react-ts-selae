import React from 'react'
import Acordeon from './Acordeon'

const Tema10PropChildren = () => {
  return (
    <div>
      <h2>Tema 10: prop children</h2>

      {/* <Acordeon titulo="Receta del salmorejo" /> */}

      <Acordeon titulo="Ingredientes del salmorejo">
        <h3 slot="titulo">Ingredientes del salmorejo</h3>
        <div>
          - Tomate 1 kg
          - Pan de hogaza preferiblemente de Telera cordobesa 200 g
          - Aceite de oliva virgen extra 150 ml
          - Dientes de ajo 1
          - Sal al gusto
        </div>
      </Acordeon>

      <Acordeon titulo="Ingredientes del salmorejo">
        <h4 slot="titulo">Ingredientes del salmorejo</h4>
        <ul>
          <li>Tomate 1 kg</li>
          <li>Pan de hogaza preferiblemente de Telera cordobesa 200 g</li>
          <li>Aceite de oliva virgen extra 150 ml</li>
          <li>Dientes de ajo 1</li>
          <li>Sal al gusto</li>
        </ul>
        <hr />
        <div>
          <label htmlFor="puntos">Puntuación:</label>
          <input type="number" id="puntos" />
        </div>
      </Acordeon>

      <Acordeon titulo="Imagen del salmorejo">
        <p slot="titulo">Imagen del salmorejo</p>
        <img style={{width: '100%'}} src="https://i.blogs.es/fe2f58/salmorejo/1366_2000.jpg" alt="Imagen del salmorejo" />
      </Acordeon>

    </div>
  )
}

export default Tema10PropChildren