import React, { useEffect, useState } from 'react'
import type { Drink, Drinks, RootDrinks } from '../interfaces/Cocktails'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const cargarCocktails = async (filtro: string) => {
  const resp: Response = await fetch(URL + filtro)
  const body: RootDrinks = await resp.json()

  console.log(body)
  if (Array.isArray(body.drinks)) {
    return body.drinks
  }
  return []
}

const BuscadorCocktails = () => {
  const [filtro, setFiltro] = useState<string>('mojito')
  const [cocktails, setCocktails] = useState<Drinks>([])
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState<Drink | null>(null)

  console.log('En el componente: ' + filtro)

  useEffect(() => {
    console.log('En el useEffect: ' + filtro)
    
    /* fetch(URL + filtro)
      .then((resp: Response) => resp.json())
      .then((body: any) => {
        console.log(body)
        if (Array.isArray(body.drinks)) {
          setCocktails(body.drinks)
        } else {
          setCocktails([])
        }
      }) */
    
    const idTimeout = setTimeout(async () => {
      const drinks = await cargarCocktails(filtro)
      setCocktails(drinks)
    }, 1000)

    return () => {
      console.log('En el return: ' + filtro)
      clearTimeout(idTimeout)
    }

  }, [filtro])

  const cambiarFiltro = (event: React.InputEvent<HTMLInputElement>) => {
    const nuevoFiltro = (event.target as HTMLInputElement).value
    setFiltro(nuevoFiltro)
  }

  const listaCocktails = cocktails.map((cocktail: Drink) => {
    return <li
      key={cocktail.idDrink}
      onClick={() => setCocktailSeleccionado(cocktail)}>
        {cocktail.strDrink}
      </li>
  })

  return (
    <div>
      <h3>Buscador de cocktails</h3>

      <div>
        <label htmlFor="buscador">Busca por:</label>
        <input type="text" id="buscador" value={filtro} onInput={cambiarFiltro}  />
      </div>

      {
        listaCocktails.length > 0 ?
        (<ul>
          {listaCocktails}
        </ul>) :
        (<p>No se han encontrado cocktails con el nombre: {filtro}</p>)
      }

      <hr />

      {cocktailSeleccionado ? 
        (<code>
          <pre>{JSON.stringify(cocktailSeleccionado, null, 2)}</pre>
        </code>) :
        (<p>Selecciona un cocktail para ver la información</p>)
      }
      
    </div>
  )
}

export default BuscadorCocktails