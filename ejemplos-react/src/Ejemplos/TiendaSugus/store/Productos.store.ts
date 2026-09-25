import { create } from "zustand";

export const useProductosStore = create((set) => {
  return {
    productos: [],
    loadProductos: async () => {
      console.log('Pasa por el zustand')
      const resp = await fetch('http://localhost:3000/products')
      const data = await resp.json()
      set({ productos: data })
    }
  }
})