const TRADUCCIONES: any = {
  es: {
    bienvenido: 'Bienvenido'
  },
  en: {
    bienvenido: 'Welcome'
  },
  fr: {
    bienvenido: 'Bienvenue'
  }
}


export const traducir = (texto: string, lang: string) => {
  return TRADUCCIONES[lang][texto]
}