import React from 'react'

const Tema01Componentes = () => {
  const titulo = "Tema 01: Componentes"
  const texto = <p>Bienvenidos al curso</p>
  const tipoInput = "color"
  
  /* Reglas del JSX:
    1. Un componente no puede devolver varios elementos, los tenemos que envolver con otra etiqueta (<div>).
    2. No podemos usar class y for, en su lugar usamos className y htmlFor.
    3. Las etiquetas siempre hay que cerrarlas (<p></p> o <br />)
    4. Cuando queremos inyectar texto en el JSX, usamos las {}.
    5. Cuando un atributo consta de mas de una palabra, se usa camelCase.
  */

  return (
    <div>
      <h2 className="titulo2">{titulo}</h2>
      {texto}
      <br />
      <form>
        <label htmlFor="select-color">Selecciona el color:</label>
        <input id="select-color" type={tipoInput} />
      </form>
    </div>
  )
}

export default Tema01Componentes