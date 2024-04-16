import User from '#models/user'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { ILoginData } from '../interfaces/ISession.js'

export default class SessionService {
  async validateUserCredentials(loginData: ILoginData) {
    const userValidated: User = await User.verifyCredentials(
      loginData.mobile_phone,
      loginData.password
    )
    return userValidated
  }

  async getAccessToken(userValidated: User) {
    const token: AccessToken = await User.accessTokens.create(userValidated)
    return token
  }

  async getUserValidatedAndToken(loginData: ILoginData) {
    const userValidated: User = await this.validateUserCredentials(loginData)
    const token: AccessToken = await this.getAccessToken(userValidated)
    return {
      user: userValidated,
      access_token: token.value!.release(),
      token_type: 'bearer',
    }
  }
}
