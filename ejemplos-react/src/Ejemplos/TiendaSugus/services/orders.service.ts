const URL = 'http://localhost:3000/orders'

export class OrdersService {
  static async getOrders(userId: number) {
    const resp = await fetch(`${URL}?userId=${userId}`)
    const data = await resp.json()
    return data
  }

  static async getOrder(orderId: number) {
    const resp = await fetch(`${URL}/${orderId}`)
    const data = await resp.json()
    return data
  }
}