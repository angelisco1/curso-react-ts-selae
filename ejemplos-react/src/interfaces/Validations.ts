export interface ValidationsType {
  'minLength'?: number,
  'pattern'?: string,
  'withMayus'?: boolean,
  'withSymbols'?: Array<string>,
}

export type KeyErrorType = 'minLength' | 'pattern' | 'withMayus' | 'withSymbols'

export interface ErrorType {
  message: string,
  key: KeyErrorType,
}


//const tupla: [string, number] = ['+34', 666777888]