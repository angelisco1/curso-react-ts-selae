import type { SugusProps } from "../../../interfaces/Sugus";

export interface ProductoPedido {
  sabor: string,
  cantidad: number
}

export type PedidoType = Array<ProductoPedido>

export interface ProductosProps {
  listaSugus: Array<SugusProps>,
  addSugusPedido: (sabor: string) => void
}

export interface PedidoProps {
  pedido: PedidoType,
  comprar: () => void,
}
