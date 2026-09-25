const URL = 'http://localhost:3000/users'

export class AuthService {

  static async login(email: string, password: string) {
    const resp = await fetch(`${URL}?email=${email}&password=${password}`)
    const data = await resp.json()

    if (data.length > 0) {
      const user = {
        email,
        name: data[0].name,
        id: data[0].id
      }
      return user
    }
    
    return null
  }
}