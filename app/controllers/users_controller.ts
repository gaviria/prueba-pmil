// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { IUser } from '../interfaces/IUser.js'
import User from '#models/user'
import { USER_MESSAGES } from '../constants/messages.js'
import { createUserValidator, updateUserValidator } from '#validators/user'
import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}
  async index({ response }: HttpContext) {
    const users: IUser[] = await this.userService.getAllUsers()
    return response.send(users)
  }

  async store({ request, response }: HttpContext) {
    const data: IUser = await createUserValidator.validate(
      request.only([
        'first_name',
        'last_name',
        'date_birth',
        'address',
        'mobile_phone',
        'email',
        'password',
      ])
    )

    const user: IUser = await this.userService.storeUser(data)

    return response.send(user)
  }

  async show({ params, response }: HttpContext) {
    const user: IUser = await this.userService.getUserById(params.id)
    return response.send(user)
  }

  async update({ params, request, response }: HttpContext) {
    const data: IUser = await request.validateUsing(updateUserValidator, {
      meta: { userId: params.id },
    })

    const userUpdated: IUser = await this.userService.updateUser(params.id, data)

    return response.send(userUpdated)
  }

  async destroy({ params, response }: HttpContext) {
    const user = await this.userService.getUserById(params.id)
    await user.delete()
    return response.send({ message: USER_MESSAGES.DELETE_SUCCESS, user: user })
  }
}
