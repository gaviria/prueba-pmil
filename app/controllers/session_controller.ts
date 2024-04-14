import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async login({ request }: HttpContext) {
    const { mobile_phone, password } = request.only(['mobile_phone', 'password'])
    const userValidated = await User.verifyCredentials(mobile_phone, password)
    const token = await User.accessTokens.create(userValidated)
    return {
      user: userValidated,
      access_token: token.value!.release(),
      token_type: 'bearer',
    }
  }
}
