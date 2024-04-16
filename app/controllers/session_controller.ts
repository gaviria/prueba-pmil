import SessionService from '#services/session_service'
import { loginValidator } from '#validators/session'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class SessionController {
  constructor(protected sessionService: SessionService) {}
  async login({ request }: HttpContext) {
    const loginData = await loginValidator.validate(request.only(['mobile_phone', 'password']))
    const userValidated = await this.sessionService.getUserValidatedAndToken(loginData)
    return userValidated
  }
}
