import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async login({ request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const userValidated = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(userValidated)
    return {
      user: userValidated,
      access_token: token.value!.release(),
      token_type: 'bearer',
    }
  }
}
