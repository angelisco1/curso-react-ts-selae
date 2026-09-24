import { useEffect, useState } from "react"
import type { ErrorType, ValidationsType } from "../interfaces/Validations"


export const useInputField = (initialValue: string = '', validations: ValidationsType = {}): [string, React.Dispatch<React.SetStateAction<string>>, Array<ErrorType>] => {
  const [value, setValue] = useState<string>(initialValue)
  const [errors, setErrors] = useState<Array<ErrorType>>([])

  useEffect(() => {
    const errores: Array<ErrorType> = []

    const validationsEntries = Object.entries(validations)

    if (validationsEntries.length === 0) {
      setErrors([])
      return
    }

    // TODO: cambiar el string por el tipo correcto: 'minLength' | 'pattern' | 'withMayus' | 'withSymbols'
    validationsEntries.forEach((entry: [string, any]) => {
      const [key, extraData] = entry

      if (key === 'minLength' && value.length < extraData) {
        errores.push({
          key: key,
          //message: 'El campo tiene que tener al menos ' + extraData + ' caracteres'
          message: `El campo tiene que tener al menos ${extraData} caracteres`
        })
      }

      if (key === 'pattern' && !new RegExp(extraData).test(value)) {
        errores.push({
          key,
          message: `El campo tiene que cumplir con el patrón ${extraData}`
        })
      }

      if (key === 'withMayus' && value === value.toLowerCase()) {
        errores.push({
          key,
          message: `El campo tiene que tener al menos una letra mayúscula`
        })
      }

      if (key === 'withSymbols' && Array.isArray(extraData) && !extraData.some((symbol: string) => value.includes(symbol))) {
        errores.push({
          key,
          message: `El campo tiene que tener al menos uno de los siguientes símbolos: ${extraData}`
        })
      }

    })
    
    // if (value.length < 4) {
    //   errores.push('El usuario tiene que tener al menos 4 caracteres')
    // }

    setErrors(errores)
  }, [value])


  return [
    value,
    setValue,
    errors
  ]
  /* return {
    value,
    setValue,
    errors
  } */
}